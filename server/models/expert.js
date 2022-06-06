import mongoose from "mongoose";

const expertSchema = mongoose.Schema({
    id: String,
    name: {type: String, required: true },
    title: String,
    description: String,
    selectedFile: String,
    category: {type: String, required: true },
    description: String,
});

const Expert = mongoose.model('Expert', expertSchema)

export default Expert;