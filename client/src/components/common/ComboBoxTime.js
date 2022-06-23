import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import TimeHelper from "../appointment/TimeHelper";


const ComboBoxTime = ( { disabledOptions, label, startHour, endHour, timespan } ) => {



    /** calculated amount of cells of the displayed calendar */
    const availableoptions = Math.ceil((endHour - startHour) * 60 / timespan)

    const replaceZero = (value) => value === 0 ? "00" : value.toFixed(0)

    /** creating our displayed options */
    const optionObj = TimeHelper.listOfTimeSlots(startHour, timespan, availableoptions)

    const createListOfDisplayString = (obj) => Object.entries(obj).map((it) => (
        `${it[1]["startHour"]}: ${replaceZero(it[1]["startMinute"])} - 
          ${it[1]["endHour"]}: ${replaceZero(it[1]["endMinute"])}`  
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
                />
    );
}

///                

export default ComboBoxTime