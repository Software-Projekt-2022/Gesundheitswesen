package layout.shared

import View
import ViewState
import io.kvision.core.Container
import io.kvision.html.button
import io.kvision.html.link
import io.kvision.html.nav


fun Container.headerNav(state: ViewState) {
    nav(className = "navbar-blue") {
        link(
            View.Home.title,
            "#${View.Home.url}",
            className = state.homeLinkClassName
        )

        link(
            View.Categories.title,
            "#${View.Categories.url}",
            className = state.categoriesClassName
        )

        link(
            View.EmergencyContact.title,
            "#${View.EmergencyContact.url}",
            className = state.emergencyLinkClassName
        )

        button("", className = "logo-cover") {
            image = io.kvision.require("small_logo.png") as? String
        }

    }


}
