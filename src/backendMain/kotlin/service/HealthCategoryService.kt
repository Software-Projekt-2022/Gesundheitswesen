package service

import database.DatabaseConfig.dbQuery
import models.HealthCategory

import org.jetbrains.exposed.sql.ResultRow
import org.jetbrains.exposed.sql.selectAll
import tables.HealthCategoryTable
import tables.HealthCategoryTable.cat_id
import tables.HealthCategoryTable.cat_title


class HealthCategoryService {

    /**
     * Query all categories from the database
     */
    suspend fun getAllCategories() = dbQuery {
        HealthCategoryTable.selectAll().map { toHealthCategory(it) }
    }

    /**
     * Convert a table entry to a concrete object
     */
    private fun toHealthCategory(row: ResultRow) =
        HealthCategory(
            cat_id = row[cat_id],
            cat_title = row[cat_title]
        )
}

