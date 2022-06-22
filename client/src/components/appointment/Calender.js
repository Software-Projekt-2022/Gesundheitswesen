/* Scheduling Component */
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import { Scheduler, WeekView, MonthView, Appointments, AppointmentForm, Toolbar, DateNavigator , TodayButton, DragDropProvider } from '@devexpress/dx-react-scheduler-material-ui';
import { useState } from 'react';

import RadioButtonGroup from '../common/RadioButtonGroup';

import appointmentDemoData from "../../demo/appointments"

const Calendar = () => {

    const [dateState, setDateState] = useState( { type: "week" } )

    const [apData, setApData] = useState( appointmentDemoData )

    const dragDisableIds = new Set([...Array(12).keys()])

    const allowDrag = ( {id} ) => dragDisableIds.has(id)

    const buttonValues = [
      {name: 'week', label: 'Woche'},
      {name: "month", label: "Monat"}
    ]

    const valueChanged = (e) =>{
      const { value } = e.target;
      setDateState({...setDateState, type : e.target.value })    }

    const appointmentFormVisible = () => dateState.type != "week"

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
          startDayHour={8} 
          endDayHour={18}
          excludedDays={[0 , 6]}
          cellDuration={45}
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