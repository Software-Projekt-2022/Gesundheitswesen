import { Autocomplete, Button, Checkbox, FormControlLabel, Paper, Stack, TextField, Typography } from "@mui/material"
import { createCalendar } from "../../api"

import { useState } from "react"
import { useDispatch } from "react-redux";
import TimeHelper from "./TimeHelper"

const CalendarConfigurator = ( {id} ) => {

    const dispatch = useDispatch()

    const initialOpeningState = {starthour: '0', startminutes: '0', endhour: '0', endminutes: '0', cellduration: '0' }

    const initalWeekState = {sunday : true ,monday : true, tuesday : true, wednesday : true, thursday : true, friday : true, saturday : true}

 
    const [data, setData] = useState(initialOpeningState);
    const [weekDays, setWeekDays] = useState(initalWeekState);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(id === null) return
        dispatch(createCalendar(id, stateToData()))
    }


    const timeToString = (hours, minutes) => (parseInt(hours)  + TimeHelper.minutesToDecimal(minutes)).toString()

    const stateToData = () => {
        const startDayHour = timeToString(data.starthour, data.startminutes);
        const endDayHour = timeToString(data.endhour, data.endminutes);
        const cellDuration = data.cellduration;
        const excludedDays = weekDaysToString();
        const id_expert = id
        const dataToSave = {id_expert, startDayHour, endDayHour, cellDuration, excludedDays}
        return dataToSave
    }

    const buttonDisabled = () => !(data.starthour !== "0"  && data.endhour !== "0" && data.cellduration !== "0")
  

    const weekDaysToString = () => {
        let weekDayToSave = ""; 
        Object.values(weekDays).forEach((days) => weekDayToSave += days ? "0" : "1");
        return weekDayToSave;
    }


    const setStartHours = (e, value) => setData({...data, starthour: value});
    const setStartMinutes = (e, value) => setData({...data, startminutes: value});
    const setEndHours = (e, value) => setData({...data, endhour: value});
    const setEndMinutes = (e, value) => setData({...data, endminutes: value});
    const setCellDuration = (e, value) => setData({...data, cellduration: value})

    const setSundayFalse = (e, value) => setWeekDays({...weekDays, sunday: value}) 
    const setMondayFalse = (e, value) => setWeekDays({...weekDays, monday: value}) 
    const setTuesdayFalse = (e, value) => setWeekDays({...weekDays, tuesday: value}) 
    const setWednesdayFalse = (e, value) => setWeekDays({...weekDays, wednesday: value}) 
    const setThursDayFalse = (e, value) => setWeekDays({...weekDays, thursday: value}) 
    const setFridayFalse = (e, value) => setWeekDays({...weekDays, friday: value}) 
    const setSaturdayFalse = (e, value) => setWeekDays({...weekDays, saturday: value}) 


    const hourOptions = Array.from(Array(24).keys()).map((it) => it.toString())
    const minuteOption = Array.from(Array(60).keys()).map((it) => it.toString())
    const cellOption = Array.from(Array(181).keys()).map((it) => it.toString())

    return (
        <Paper >
        <form id={"genericForm"} autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack direction={"row"} justifyContent="center">
            <Typography variant="h4" style={{ margin: "20px", display: 'flex', justifyContent: 'center', }}>Öffnungszeiten:</Typography>
                <Autocomplete
                    disablePortal
                    options={hourOptions}
                    onChange={(event, value) => setStartHours(event, value)}
                    sx={{ width: 150, margin: "10px" }}
                    renderInput={(params) => <TextField {...params} label="Stunden" />}
                    />
                <Autocomplete
                    disablePortal
                    options={minuteOption}
                    onChange={(event, value) => setStartMinutes(event, value)}
                    sx={{ width: 150, margin: "10px" }}
                    renderInput={(params) => <TextField {...params} label="Minuten" />}
                    />
            </Stack>
            <Stack direction={"row"} justifyContent="center">
            <Typography variant="h4" style={{ margin: "20px", display: 'flex', justifyContent: 'center', }}>Feierabend:</Typography>
                <Autocomplete
                    disablePortal
                    options={hourOptions}
                    onChange={(event, value) => setEndHours(event, value)}
                    sx={{ width: 150, margin: "10px" }}
                    renderInput={(params) => <TextField {...params} label="Stunden" />}
                    />
                <Autocomplete
                    disablePortal
                    options={minuteOption}
                    onChange={(event, value) => setEndMinutes(event, value)}
                    sx={{ width: 150, margin: "10px" }}
                    renderInput={(params) => <TextField {...params} label="Minuten" />}
                    />
            </Stack>
            <Stack direction={"row"} justifyContent="center">
             <Typography variant="h4" style={{ margin: "20px", display: 'flex', justifyContent: 'center', }}>Tage die geöffnet sind:</Typography>
            </Stack>
            <Stack direction={"row"} justifyContent="center">

            <FormControlLabel
                value={weekDays.initalWeekState}
                control={<Checkbox />}
                label="Sonntag"
                checked={weekDays.sunday}
                labelPlacement="top"
                onChange={(e, value) => setSundayFalse(e, value)}
                />
            <FormControlLabel
                value={weekDays.initalWeekState}
                control={<Checkbox />}
                label="Montag"
                checked={weekDays.monday}
                labelPlacement="top"
                onChange={(e, value) => setMondayFalse(e, value)}
                />
            <FormControlLabel
                value={weekDays.initalWeekState}
                control={<Checkbox />}
                label="Dienstag"
                checked={weekDays.tuesday}
                labelPlacement="top"
                onChange={(e, value) => setTuesdayFalse(e, value)}
                />
            <FormControlLabel
                value={weekDays.initalWeekState}
                control={<Checkbox />}
                label="Mittwoch"
                checked={weekDays.wednesday}
                labelPlacement="top"
                onChange={(e, value) => setWednesdayFalse(e, value)}
                />
            <FormControlLabel
                value={weekDays.initalWeekState}
                control={<Checkbox />}
                label="Donnerstag"
                checked={weekDays.thursday}
                labelPlacement="top"
                onChange={(e, value) => setThursDayFalse(e, value)}
                />
            <FormControlLabel
                value={weekDays.initalWeekState}
                control={<Checkbox />}
                label="Freitag"
                checked={weekDays.friday}
                labelPlacement="top"
                onChange={(e, value) => setFridayFalse(e, value)}
                />
            <FormControlLabel
                value={weekDays.initalWeekState}
                control={<Checkbox />}
                label="Samstag"
                checked={weekDays.saturday}
                labelPlacement="top"
                onChange={(e, value) => setSaturdayFalse(e, value)}
                />
            </Stack>
            <Stack direction={"row"} justifyContent="center">
            <Autocomplete
                    disablePortal
                    options={cellOption}
                    onChange={(event, value) => setCellDuration(event, value)}
                    sx={{ width: 300, margin: "10px" }}
                    renderInput={(params) => <TextField {...params} label="Zeiten pro Buchung" />}
                    />
            </Stack>
            <Button disabled={buttonDisabled()} onSubmit={(e) => handleSubmit(e)}  variant="contained" color="primary" size="large" type="submit" fullWidth>Erstellen</Button>
        </form>
    </Paper>
    )

}

export default CalendarConfigurator