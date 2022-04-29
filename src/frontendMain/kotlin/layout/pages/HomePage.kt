package layout.pages

import ViewState
import io.kvision.core.AlignContent
import io.kvision.core.Container
import io.kvision.core.Display
import io.kvision.form.text.text
import io.kvision.html.button
import io.kvision.html.div
import io.kvision.html.h1
import io.kvision.html.image
import io.kvision.utils.px
import layout.shared.CCCssClasses

private val textString =
        "Vereinbare einen Termin oder such \n" +
                "nach einen Spezialisten in deiner Stadt"


/**
 * Kind of HTML Page of "Startseite"
 */
fun Container.homePage(state: ViewState) {
    div {
        display = Display.FLEX
        div {
            h1(textString, className = CCCssClasses.BIG_TEXT) {
                marginTop = 50.px
                image("red_line01.png")
            }
            searchBox()
        }
        image("random_image.png")

    }
}


private fun Container.searchBox() {

    val buttonMargin = 20.px

    div(className = "Search-Component") {

        alignContent = AlignContent.CENTER
        margin = 20.px
        marginLeft = 200.px

        button("Datum", className = CCCssClasses.SIMPLE_BUTTON){
            margin = buttonMargin
        }
        button("Kategorien", className = CCCssClasses.SIMPLE_BUTTON){
            margin = buttonMargin
        }
        div {

            text() {
                marginLeft = 200.px
                marginBottom = 10.px
                readonly = false
            }
            button("Suche", className = CCCssClasses.SIMPLE_BUTTON) {
                marginLeft = 170.px
            }
        }
    }
}






