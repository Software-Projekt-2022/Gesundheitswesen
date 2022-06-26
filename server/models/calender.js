import mongoose from "mongoose";

const CalendarSchema = mongoose.Schema({
    id_expert: String,
    startDayHour: String,
    endDayHour: String,
    excludedDays: String,
    cellDuration: String,
});

const Expert = mongoose.model('Calendar', CalendarSchema)

export default Expert;