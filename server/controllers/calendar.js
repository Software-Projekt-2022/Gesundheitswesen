import mongoose from "mongoose";
import Calendar from "../models/calender.js"


export const createCalendar = async (req, res) => {
    const body = req.body;

    const newCalendar = new Calendar(body)

    try{
        await newCalendar.save();

        res.status(201).json(newCalendar)
    }catch (error){
        res.status(409).json( {message: error.message} )
    }

}

export const getCalendarByExpertID = async (req, res) => {
    const { id } = req.params
    try{
        const calendar = await Calendar.find( {id_expert : id} );

        res.status(200).json(calendar);
    } catch (error){
        res.status(404).json( {message: error.message} )
    }
}

export const getCalendarByID = async (req, res) => {

    const { id } = req.params
    try{
        const calendar = await Calendar.findById(id);

        res.status(200).json(calendar);
    } catch (error){
        res.status(404).json( {message: error.message} )
    }
}


export const updateCalendar = async (req, res) => {
    const { id: _id } = req.params;
    const calendar = req.body;

    if(mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Keine Calendar mit dieser ID gefunden');

    const updateCalendar = await Calendar.findByIdAndUpdate(_id, calendar, { new: true })

    res.json(updateCalendar)

}


export const deleteCalendar = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`Keine Kalendar mit dieser ${id} gefunden`);

    const deleteCalendar = await Calendar.findByIdAndRemove(id)

    res.json(deleteCalendar)

}