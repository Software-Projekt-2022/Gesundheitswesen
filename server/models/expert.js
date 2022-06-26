import mongoose from "mongoose";

const expertSchema = mongoose.Schema({
    name: String,
    title: String,
    selectedFile: String,
    category: String,
    description: String,
    calendar_id: String,
    created_at    : { type: Date, required: true, default: Date.now }
});

const Expert = mongoose.model('Expert', expertSchema)

export default Expert;