/* Scheduling Component */
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import { Scheduler, WeekView, MonthView, Appointments,  Toolbar, DateNavigator , TodayButton } from '@devexpress/dx-react-scheduler-material-ui';
import { useState } from 'react';

import RadioButtonGroup from '../common/RadioButtonGroup';

import appointmentDemoData from "../../demo/appointments"

const Calendar = ( {startDayHour, endDayHour, excludedDays, cellDuration} ) => {

    const [dateState, setDateState] = useState( { type: "week" } )

    const [apData, setApData] = useState( appointmentDemoData )
 
    const buttonValues = [
      {name: 'week', label: 'Woche'},
      {name: "month", label: "Monat"}
    ]

    const valueChanged = (e) =>{
      setDateState({...setDateState, type : e.target.value })    }

    return (

    <div id="calendar">
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
    </div>);
}

export default Calendar;