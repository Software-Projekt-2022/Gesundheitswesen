import io.kvision.navigo.Navigo

/**
 * Pack of Views with its url links
 */
enum class View(val url: String, val title: String){
    Home("/", "Startseite"),
    Categories("/categories", "Kategorien"),
    EmergencyContact("/emergency_contact", "Notfallkontakte"),
    CyberCity("/cybercity", "Cybercity")
}

/**
 * initialize the Routes
 */
fun Navigo.initialize() : Navigo{
    return on(View.Home.url,  {_ -> ViewManager.homePage()})
        .on(View.CyberCity.url, {_ -> ViewManager.cyberCity()})
        .on(View.Categories.url, {-> ViewManager.categoryPage()})
        .on(View.EmergencyContact.url, {-> ViewManager.emergencyPage()})
}