
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';

/**
 * 
 * @param { [JSON{name : "", label: ""}] } buttonValues, values of each FromcontrolLabel.
 * @param { String } initialState, defaultValue, Button which used to be clicked at the beginning
 * @param { style } style 
 * @param { SyntheticButtonEvent } onValueChanged event that will be fired
 * @returns 
 */
const RadioButtonGroup = ( {buttonValues, initialState, style, onValueChanged} ) => {

    const state = initialState;
  
    /** Hook for ButtonState */
    const [buttonsState, setButtonState] = useState( {state} )
  
    /** Hook when Button is set */
    const setCurrentButtonsState = (e) => {
      const { name, value } = e.target;
      setButtonState( {...setButtonState, [name] : value} )
      onValueChanged( e )
    }
  
    return(  
      <FormControl>
        <RadioGroup
          style={style}
          value={buttonsState.buttonValues}
          onChange={((e) => setCurrentButtonsState(e))}
          defaultValue={initialState}
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