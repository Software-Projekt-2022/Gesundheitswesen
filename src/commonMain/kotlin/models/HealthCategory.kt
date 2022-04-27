package models

@kotlinx.serialization.Serializable
data class HealthCategory(val cat_id : Int, val cat_title : String){
    companion object {
        const val path = "/category"
    }
}
