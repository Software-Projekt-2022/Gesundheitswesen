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
    ViewAction.HomePage -> state.copy(view = View.Home)
    ViewAction.Categories -> state.copy(view = View.Categories)
    ViewAction.EmergencyContact -> state.copy(view = View.EmergencyContact)
}

sealed class ViewAction : RAction {
    object HomePage: ViewAction()
    object Categories: ViewAction()
    object EmergencyContact : ViewAction()
}