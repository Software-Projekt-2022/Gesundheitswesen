
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';

const RadioButtonGroup = ( {buttonValues, initialState, style} ) => {

    const state = initialState;
  
    const [buttonsState, setButtonState] = useState( {state} )
  
    const setCurrentButtonsState = (e) => {
      const { name, value } = e.target;
      setButtonState( {...setButtonState, [name] : value} )
    }
  
    return(  
      <FormControl>
        <RadioGroup
          style={style}
          value={buttonsState.buttonValues}
          onChange={((e) => setCurrentButtonsState(e))}
          >
          {buttonValues.map((button) => 
            <FormControlLabel 
                value={button.name} 
                control={<Radio/>} 
                label={button.label}    
            />)}
        </RadioGroup>
      </FormControl>
    )
  };

  export default RadioButtonGroup