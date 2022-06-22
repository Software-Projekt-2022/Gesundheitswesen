/* Scheduling Component */
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import { Scheduler, WeekView, MonthView, Appointments,  Toolbar, DateNavigator , TodayButton } from '@devexpress/dx-react-scheduler-material-ui';
import { useState } from 'react';

import RadioButtonGroup from '../common/RadioButtonGroup';

import appointmentDemoData from "../../demo/appointments"
import { Container } from '@material-ui/core';
import Stack from '@mui/material/Stack';

import ComboBoxDay from '../common/ComboBoxDay';
import ComboBoxTime from '../common/ComboBoxTime';

const Calendar = ( {startDayHour, endDayHour, excludedDays, cellDuration} ) => {

    const [dateState, setDateState] = useState( { type: "week" } )

    const [apData, setApData] = useState( appointmentDemoData )
 
    const buttonValues = [
      {name: 'week', label: 'Woche'},
      {name: "month", label: "Monat"}
    ]

    const valueChanged = (e) =>{
      setDateState({...setDateState, type : e.target.value })    }

      const includedDays = Array.from(Array(7).keys()
      ).filter((it) => (!excludedDays.includes(it.toString()))
        ).map(it => (
          it.toString()))

    return (

    <Container id="calendar">
      <RadioButtonGroup  
      style={{ flexDirection: 'row' }}
      buttonValues={buttonValues}
      onValueChanged={(e)=> valueChanged(e)}
      initialState = 'week'
      ></RadioButtonGroup>

      <Scheduler 
      height={600} 
      locale={"de"}
      data={apData}
      >
        <ViewState 
        currentViewName={dateState.type}
        defaultCurrentDate="2018-07-25"
        
        />

        <EditingState  a/>
        <IntegratedEditing />
        <WeekView name="week"
          startDayHour={startDayHour ? startDayHour : 8} 
          endDayHour={endDayHour ? endDayHour : 18}
          excludedDays={excludedDays ? excludedDays : [0 , 6]}
          cellDuration={cellDuration ? cellDuration : 45}
          />
        <MonthView name='month' />
        <Toolbar />
        <Appointments />
        <DateNavigator />
        <TodayButton />
      </Scheduler>

      <Stack direction="row" spacing={5} marginTop="70px" justifyContent="center" alignContent="center">        
                          
        <ComboBoxDay 
            days={includedDays}
            onValueChange={(e) => console.log(e)}
            />

          <ComboBoxTime 
            label={"Uhrzeit"}
            startHour={startDayHour}
            endHour={endDayHour}
            timespan={cellDuration}
            />

        </Stack>
    </Container>);
}

export default Calendar;