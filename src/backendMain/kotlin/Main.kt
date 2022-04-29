
import com.typesafe.config.ConfigFactory
import database.DatabaseConfig
import io.ktor.html.HtmlContent
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.config.*
import io.ktor.server.engine.*
import io.ktor.server.http.content.*
import io.ktor.server.netty.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.html.*
import routes.healthCategoryRouting
import service.HealthCategoryService

/**
 * part of [Application.helloWorld] will be removed soon
 */
fun HTML.index() {
    head {
        title("Hello from Ktor!")
    }
    body {
        div {
            +"Hello from Ktor"
        }
        div {
            id = "root"
        }
        script(src = "/static/cyber_city_healthcare.js") {}
    }
}


private val appConfig = HoconApplicationConfig(ConfigFactory.load())


fun main() {

    val port = appConfig.property("ktor.deployment.port").getString().toInt()
    val host = appConfig.property("ktor.deployment.host").getString()

    embeddedServer(Netty, port = port, host = host) {
        module()
        helloWorld()
    }.start(wait = true)
}

/**
 * Function used to initialize the Server,
 * install routes and connect to the database
 */
fun Application.module() {

    install(ContentNegotiation){
        json()
    }

    DatabaseConfig.connectAndMigrate()

    install(Routing){
        healthCategoryRouting(HealthCategoryService())
    }
}

/**
 * Test function, will be removed soon
 */
fun Application.helloWorld(){

    routing {

        get("/") {
            call.respondHtml(HttpStatusCode.OK, HTML::index)
        }
        static("/static"){
            resources()
        }
    }
}

/**
 * Copied from kotlinx, does not work otherwise
 */
suspend fun ApplicationCall.respondHtml(status: HttpStatusCode = HttpStatusCode.OK, block: HTML.() -> Unit) {
    respond(HtmlContent(status, block))
}