import mongoose from "mongoose";

const appointmentSchema = mongoose.Schema({
    id: String,
    id_expert: String,
    startdate: String,
    enddate: String,
    reason: String,
    creator: String,
    created_at    : { type: Date, required: true, default: Date.now }
});

const Expert = mongoose.model('Appointment', appointmentSchema)

export default Expert;