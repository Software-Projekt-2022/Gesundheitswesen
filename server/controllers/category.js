import mongoose from "mongoose";
import Category from "../models/category.js"

export const getCategory = async (req, res) => { 
    try{
        const category = await Category.find();

        console.log(category)

        res.status(200).json(category);

    } catch(error) {
        res.status(404).json({ message: error.message })
    }
}

export const createCategory = async (req, res) => {
    const body = req.body;

    const newCategory = new Category(body)

    try{
        await newCategory.save();

        res.status(201).json(newCategory)
    }catch{
        res.status(409).json( {message: error.message} )
    }

}

export const updateCategory = async (req, res) => {
    const { id: _id } = req.params;
    const category = req.body;

    if(mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Keine Kategorie mit dieser ID gefunden');

    const updatedCategory = await Category.findByIdAndUpdate(_id, category, { new: true })

    res.json(updatedCategory)

}

export const deleteCategory = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`Keine Kategorie mit dieser ${id} gefunden`);

    const deleteCategory = await Category.findByIdAndRemove(id)

    res.json(deleteCategory)

}