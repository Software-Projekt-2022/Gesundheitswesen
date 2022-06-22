import { Autocomplete, TextField } from "@mui/material";

const SelectButtonBox = ( {disabledOpitions, label, startHour, endHour, timespan} ) => {

    const availableoptions = Math.ceil((endHour - startHour) * 60 / timespan)

    const calcTimeSlots = (index) => {
        let minutes = ((index + 1) * timespan) - timespan
        let hours = minutes / 60
        if(hours % 1 !== 0){
            minutes = 60 * (hours % 1)
            hours = Math.floor(hours)
        }else {
            minutes = "00"
        }
        hours += startHour
        return {"Hours": hours, "Minutes": minutes}
    }

    const timeSlots =() => Array.from(new Array(availableoptions)).map(
        (_, index) => {
            const timeSlots = calcTimeSlots(index)
            return`${timeSlots.Hours}: ${timeSlots.Minutes}`
        }
      );

    return (
        <div>
            <Autocomplete
                options={timeSlots()}
                getOptionDisabled={(option) =>
                    option === timeSlots()[0] || option === timeSlots()[2]
                }
                sx={{ width: 200 }}
                renderInput={(params) => <TextField  {...params} label={label} />}
                />
        </div>
    );
}

export default SelectButtonBox