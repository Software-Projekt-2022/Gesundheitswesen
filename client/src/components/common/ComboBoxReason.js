import { Autocomplete, TextField } from "@mui/material";
import ReasonEnum from "../enums/ReasonEnum";

const ComboboxReason = ( { disabled ,onValueChange } ) => {
    if(disabled) return
    return (
        <Autocomplete
            options={ Object.keys(ReasonEnum).map((reason) => reason) }
            sx={{ width: 200 }}
            renderInput={(params) => <TextField  {...params} label="Grund" />}
            onChange={(event, value) => onValueChange(value)} 
        />
      );
}

export default ComboboxReason