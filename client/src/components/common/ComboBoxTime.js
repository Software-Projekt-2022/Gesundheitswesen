import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import TimeHelper from "../calendar/TimeHelper";

/**
 * 
 * @param { JSON } disabledOptions JSON created from [TimeHelper], called TimeSlot
 * @param { JSON } label set on the Button
 * @param { float } startHour start of the whole timespan
 * @param { float } endHour end of the whole timespan
 * @param { int } timespan between each part of the time
 * @param { CallableFunction } onChange when the button is clicked and changed
 * @returns 
 */
const ComboBoxTime = (  {disabledOptions, label, startHour, endHour, timespan, onChange}  ) => {

    /** calculated amount of cells of the displayed calendar */
    const availableoptions = Math.ceil((endHour - startHour) * 60 / timespan)

    const replaceZero = (value) => value === 0 ? "00" : value.toFixed(0)

    /** creating our displayed options */
    const optionObj = TimeHelper.listOfTimeSlots(startHour, timespan, availableoptions)

    /**
     * 
     * @param { JSON } obj created from [TimeHelper], called TimeSlot
     * @returns list of Strings extracted from JSON
     * @See TimeHelper.createTimeSlotObj
     */
    const createListOfDisplayString = (obj) => Object.entries(obj).map((it) => (
        `${it[1]["startHour"]}:${replaceZero(it[1]["startMinute"])} - ${it[1]["endHour"]}:${replaceZero(it[1]["endMinute"])}`  
    ))

    if(disabledOptions == null)
    return

    let disableds = []

    for (const takenOption of Object.entries(disabledOptions)){
        for (const option of Object.entries(optionObj)){
            //console.log(takenOption[1]["startInteger"])
            // if a Value is blocked dont take it to the disabled Ones
            if(takenOption[1]["startInteger"] >= option[1]["endInteger"] ||
                takenOption[1]["endInteger"] <= option[1]["startInteger"]){
                continue;
                // we dont want double ones
            } else if(disableds.includes(option))
                continue
            else {
                disableds.push(option)
            }
        }
    }

    disableds = disableds.map((it) => it[1])

    let displayStrings = createListOfDisplayString(optionObj)
    const disabledStrings = createListOfDisplayString(disableds)

    // if only available Strings should be displayed
    //displayStrings =  displayStrings.filter((string) => !disabledStrings.includes(string))

    return (
            <Autocomplete
                options={displayStrings}
                getOptionDisabled={(option) => disabledStrings.includes(option)}
                sx={{ width: 200 }}
                renderInput={(params) => <TextField  {...params} label={label} />}
                onChange={(event, value) => onChange(value)} 
                />
    );
}

export default ComboBoxTime