package tables

import org.jetbrains.exposed.sql.Column
import org.jetbrains.exposed.sql.Table

/**
 * Table of Health Categories
 */
object HealthCategoryTable: Table() {
    val cat_id = integer("cat_id").autoIncrement()
    val cat_title: Column<String> = varchar("cat_title", 100).uniqueIndex()
    override val primaryKey = PrimaryKey(cat_id)
}


