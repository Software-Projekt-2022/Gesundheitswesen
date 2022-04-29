package layout.pages

import ViewState
import io.kvision.core.Container
import layout.shared.banner

fun Container.categoryPage(state: ViewState) {
    if(!state.appLoading)
        banner("Kategorien")
}