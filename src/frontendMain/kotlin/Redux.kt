import io.kvision.redux.RAction

data class ViewState (
    val appLoading: Boolean = false,
    val view: View = View.Home

){
    private fun linkClassName(view: View) = if (this.view == view) "nav-link active" else "nav-link"


    val cyberCityLinkClassName = linkClassName(View.CyberCity)
    val homeLinkClassName = linkClassName(View.Home)
    val categoriesClassName = linkClassName(View.Categories)
    val emergencyLinkClassName = linkClassName(View.EmergencyContact)
}

fun viewReducer(state: ViewState, action: ViewAction): ViewState = when(action){
    is ViewAction.HomePage -> state.copy(view = View.Home)
    is ViewAction.CategoryPage -> state.copy(view = View.Categories)
    is ViewAction.EmergencyPage -> state.copy(view = View.EmergencyContact)
    is ViewAction.CyberCity -> state.copy(view = View.CyberCity)
}

sealed class ViewAction : RAction {
    object HomePage: ViewAction()
    object CategoryPage: ViewAction()
    object EmergencyPage : ViewAction()
    object CyberCity : ViewAction()
}