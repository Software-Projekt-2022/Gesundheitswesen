import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ComboBoxDay = ( {days, onValueChange} ) => {
  const [day, setDay] = useState('');

  const handleChange = (event) => {
    setDay(event.target.value);
    onValueChange( event )
  };

  const DaysEnum = Object.freeze({ 
    "Sonntag" : "0", 
    "Montag" : "1", 
    "Dienstag" : "2",
    "Mittwoch" : "3", 
    "Donnerstag" : "4", 
    "Freitag" : "5", 
    "Samstag" : "6", 
  })

  return (
    <Box sx={{ width: 120 }}>
      <FormControl fullWidth>
        <InputLabel>Tag</InputLabel>
        <Select
          value={day}
          label="Age"
          onChange={handleChange}
        >
        {
        Object.entries(DaysEnum
        ).filter((keys, _) => (days.includes(keys[1]))
            ).map((it) => (
            <MenuItem value={it[1]}> {it[0]}</MenuItem>))
        }
        </Select>
      </FormControl>
    </Box>
  );
}

export default ComboBoxDay;