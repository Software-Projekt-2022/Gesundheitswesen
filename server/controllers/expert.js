import mongoose from "mongoose";
import Category from "../models/category.js"
import Expert from "../models/expert.js";

export const getExpert = async (req, res) => { 
    try{
        const expert = await Expert.find();

        res.status(200).json(expert);

    } catch(error) {
        res.status(404).json({ message: error.message })
    }
}

export const getExpertByID = async (req, res) => {
    const { id } = req.params

    try{
        const expert = await Expert.findById(id);

        res.status(200).json(expert);
    } catch (error){
        res.status(404).json( {message: error.message} )
    }
}

export const deleteExpert = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`Keine Experte mit dieser ${id} gefunden`);

    const deleteExpert = await Expert.findByIdAndRemove(id)

    res.json(deleteExpert)

}

export const createExpert = async (req, res) => {
    const body = req.body;

    const newExpert = new Expert(body)

    try{
        await newExpert.save();

        res.status(201).json(newExpert)
    }catch (error){
        res.status(409).json( {message: error.message} )
    }

}

export const updateExpert = async (req, res) => {
    const { id: _id } = req.params;
    const expert = req.body;

    if(mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Keine Kategorie mit dieser ID gefunden');

    const updatedExpert = await Category.findByIdAndUpdate(_id, expert, { new: true })

    res.json(updatedExpert)

}