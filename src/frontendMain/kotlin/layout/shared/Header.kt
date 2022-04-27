package layout.shared

import ViewState
import io.kvision.core.*
import io.kvision.html.*
import io.kvision.utils.auto
import io.kvision.utils.px

fun Container.headerNav(state: ViewState) {
    nav(className = "navbar-blue") {
        button(
            View.Home.title,
            View.Home.url,
            className = state.homeLinkClassName
        )

        button(
            View.Categories.title,
            View.Categories.url,
            className = state.categoriesClassName
        )

        button(
            View.EmergencyContact.title,
            View.EmergencyContact.url,
            className = state.emergencyLinkClassName
        )

        button("", className = "logo-cover") {
            image = io.kvision.require("small_logo.png") as? String
        }

    }


}