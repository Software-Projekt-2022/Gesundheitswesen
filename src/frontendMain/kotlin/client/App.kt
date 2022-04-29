package client

import ViewManager
import io.kvision.Application
import io.kvision.html.header
import io.kvision.html.main
import io.kvision.module
import io.kvision.pace.Pace
import io.kvision.pace.PaceOptions
import io.kvision.panel.ContainerType
import io.kvision.panel.root
import io.kvision.routing.Routing
import io.kvision.startApplication
import io.kvision.state.bind
import layout.pages.categoryPage
import layout.pages.cyberCity
import layout.pages.emergencyPage
import layout.pages.homePage
import layout.shared.headerNav

/**
 * Main class to start the frontend Application
 */
class App : Application(){

    // Linking/bind an init all necessary components and links
    override fun start() {
        Routing.init()
        Pace.init(io.kvision.require("pace-progressbar/themes/blue/pace-theme-bounce.css"))
        Pace.setOptions(PaceOptions(manual = true))
        ViewManager.initialize()
        root("CyberCity_HealthCare", containerType =  ContainerType.NONE, addRow = false){
            header().bind(ViewManager.viewStore){
                headerNav(it)
            }
            main().bind(ViewManager.viewStore) { state ->
                if(!state.appLoading){
                    when(state.view){
                        View.Home -> homePage(state)
                        View.EmergencyContact -> emergencyPage(state)
                        View.Categories -> categoryPage(state)
                        View.CyberCity -> cyberCity(state)
                    }
                }
            }
        }
    }
}

fun main() {
    startApplication(::App, module.hot)
}
