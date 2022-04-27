enum class View(val url: String, val title: String){
    Home("/", "Startseite"),
    Categories("#/categories", "Kategorien"),
    EmergencyContact("#/emergency_contact", "Notfallkontakte"),
    CyberCity("#/cybercity", "Cybercity")
}