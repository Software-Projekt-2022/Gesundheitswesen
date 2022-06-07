import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    title: String,
    description: String,
    selectedFile: String,
    created_at    : { type: Date, required: true, default: Date.now }
});

const Category = mongoose.model('Category', categorySchema)

export default Category;