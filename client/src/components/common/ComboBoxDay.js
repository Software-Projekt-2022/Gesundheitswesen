import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DaysEnum from '../enums/DaysEnum.js';

/**
 * 
 * @param { Array }  of String, of the Days  that are excluded
 * @param { * } callBackFunction
 */
const ComboBoxDay = ( {days, onValueChange, value} ) => {
  const [day, setDay] = useState('');


    const handleChange = (event) => {
    const { value } = event.target 
    setDay(value);
    onValueChange( DaysEnum[ value ] )
  };

  return (
    <Box sx={{ width: 200 }}>
      <FormControl fullWidth>
        <InputLabel>Tag</InputLabel>
        <Select
          value={value}
          label="Age"
          onChange={(event, value) => onValueChange(value)}
        >
        {
        Object.entries(DaysEnum
        ).filter((key, _) => (days.includes(key[0]))
            ).map((it) => (
            <MenuItem value={it[0]}> {it[1]}</MenuItem>))
        }
        </Select>
      </FormControl>
    </Box>
  );
}

export default ComboBoxDay;