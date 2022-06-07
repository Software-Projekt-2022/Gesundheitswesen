import { TextField } from "@material-ui/core";

const SimpleInput = ( {name, label, onChange, value} ) => (
    <TextField
        name={name}
        variant="outlined"
        label={label}
        fullWidth
        value={value}
        onChange={onChange}
    >

    </TextField>
)

export default SimpleInput;