package layout.shared

import io.kvision.core.Container
import io.kvision.html.div
import io.kvision.html.h1
import io.kvision.html.p

fun Container.banner(bannerText: String){
    div(className = "home-page") {
        div(className = "banner") {
            div(className = "container"){
                h1 ("CyberCity", className = "logo")
                p (bannerText)
            }
        }
    }
}