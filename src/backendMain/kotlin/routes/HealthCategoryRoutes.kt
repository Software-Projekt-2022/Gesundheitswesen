package routes


import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.util.pipeline.*
import models.HealthCategory
import org.slf4j.LoggerFactory
import service.HealthCategoryService


fun Route.healthCategoryRouting(healthCategoryService: HealthCategoryService) {

    route(HealthCategory.path) {

        get { call.respond(healthCategoryService.getAllCategories()) }

    }
}

