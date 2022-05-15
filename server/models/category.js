import mongoose from "mongoose";


const categorySchema = mongoose.Schema({
    title: String,
    description: String,
    selectedFile: String
});

const Category = mongoose.model('Category', categorySchema)

export default Category;