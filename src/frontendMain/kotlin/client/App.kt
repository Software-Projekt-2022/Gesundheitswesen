package client

import ViewManager
import io.kvision.Application
import io.kvision.html.header
import io.kvision.html.span
import io.kvision.module
import io.kvision.navigo.Navigo
import io.kvision.pace.Pace
import io.kvision.panel.ContainerType
import io.kvision.panel.root
import io.kvision.startApplication
import io.kvision.routing.Routing
import io.kvision.state.bind
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob
import layout.shared.headerNav
import kotlin.coroutines.CoroutineContext

class App : Application(){

    override fun start() {
        Routing.init()
        Pace.init(io.kvision.require("pace-progressbar/themes/blue/pace-theme-bounce.css"))
        root("CyberCity_HealthCare", containerType =  ContainerType.NONE, addRow = false){
            header().bind(ViewManager.viewStore){
                headerNav(it)
            }
        }
    }
}

fun main() {
    startApplication(::App, module.hot)
}
