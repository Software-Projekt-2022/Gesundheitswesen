import io.kvision.navigo.Navigo
import io.kvision.redux.createReduxStore
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob

object ViewManager : CoroutineScope by CoroutineScope(Dispatchers.Default + SupervisorJob()) {

    private val routing = Navigo(null, true, "#")

    val viewStore = createReduxStore(::viewReducer, ViewState())

}