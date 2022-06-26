import Appointment from "../models/appointment.js"
import mongoose from "mongoose";


export const getAppointments = async (req, res) => { 
    try{
        const appointments = await Appointment.find();

        res.status(200).json(appointments);

    } catch(error) {
        res.status(404).json({ message: error.message })
    }
}

export const createAppointment = async (req, res) => {
    const body = req.body;

    const newAppointment = new Appointment(body)

    try{
        await newAppointment.save();

        res.status(201).json(newAppointment)
    }catch (error){
        res.status(409).json( {message: error.message} )
    }

}

export const getAppointmentByID = async (req, res) => {
    const { id } = req.params

    try{
        const appointment = await Appointment.findById(id);

        res.status(200).json(appointment);
    } catch (error){
        res.status(404).json( {message: error.message} )
    }
}


export const deleteAppointment = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`Keine Buchung mit dieser ${id} gefunden`);

    const deleteAppointment = await Expert.findByIdAndRemove(id)

    res.json(deleteAppointment)

}