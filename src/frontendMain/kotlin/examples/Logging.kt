package examples

val DEBUG = true

fun debug(s: String, color: LogType? = null) {
    if (DEBUG) {
        console.log("%c $s", when (color) {
            null -> ""
            LogType.EVENT -> "background: #FF0; color: #000000"
            LogType.ROUTING -> "background: #09F; color: #000000"
        })
    }
}

enum class LogType {
    EVENT,
    ROUTING,
}