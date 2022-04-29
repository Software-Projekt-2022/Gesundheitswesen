package routes


import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import models.HealthCategory
import service.HealthCategoryService

/**
 * Every Route for the HealthCategories
 */
fun Route.healthCategoryRouting(healthCategoryService: HealthCategoryService) {

    route(HealthCategory.path) {

        /**
         * returns all categories
         */
        get { call.respond(healthCategoryService.getAllCategories()) }

    }
}

