import io.kvision.navigo.Navigo
import io.kvision.redux.createReduxStore
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob

object ViewManager : CoroutineScope by CoroutineScope(Dispatchers.Default + SupervisorJob()) {

    fun initialize()  = routing.initialize().resolve()

    // Routing Function
    fun homePage() =  viewStore.dispatch(ViewAction.HomePage)
    fun categoryPage() = viewStore.dispatch(ViewAction.CategoryPage)
    fun emergencyPage() = viewStore.dispatch(ViewAction.EmergencyPage)
    fun cyberCity() = viewStore.dispatch(ViewAction.CyberCity)


    private val routing = Navigo(null, true, "#")

    fun redirect(view: View) = routing.navigate(view.url)

    val viewStore = createReduxStore(::viewReducer, ViewState())


}