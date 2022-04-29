import io.kvision.navigo.Navigo
import io.kvision.redux.createReduxStore
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob

object ViewManager : CoroutineScope by CoroutineScope(Dispatchers.Default + SupervisorJob()) {

    fun initialize() {
        routing.initialize().resolve()
        afterInitialize()
    }

    private fun afterInitialize(){
        viewStore.dispatch(ViewAction.HomePage)
    }

    private val routing = Navigo(null, true, "#")

    fun redirect(view: View) = routing.navigate(view.url)

    val viewStore = createReduxStore(::viewReducer, ViewState())

    fun homePage() = run { viewStore.dispatch(ViewAction.HomePage) }
    fun categoryPage() = run { viewStore.dispatch(ViewAction.CategoryPage) }
    fun emergencyPage() = run { viewStore.dispatch(ViewAction.EmergencyPage) }
    fun cyberCity() = run { viewStore.dispatch(ViewAction.CyberCity) }

}