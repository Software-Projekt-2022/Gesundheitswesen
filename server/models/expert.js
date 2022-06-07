import mongoose from "mongoose";

const expertSchema = mongoose.Schema({
    name: String,
    title: String,
    selectedFile: String,
    category: String,
    description: String,
});

const Expert = mongoose.model('Expert', expertSchema)

export default Expert;