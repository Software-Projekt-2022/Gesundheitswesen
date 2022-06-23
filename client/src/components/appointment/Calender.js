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
import DaysEnum from '../common/DaysEnum';
import TimeHelper from './TimeHelper';

const Calendar = ( {startDayHour, endDayHour, excludedDays, cellDuration} ) => {


    /** Radiobutton Hook for CalenderTyp */
    const [calendarType, setCalendarType] = useState( { type: "week" } )

    /** ComboBoxDay Hook for choosed Day*/
    const [takenOptions, setTakenOptions] = useState(null)

    const [currendDate, setCurrentDay] = useState("2018-07-25")

    const [apData, setApData] = useState( appointmentDemoData )

    const buttonValues = [
      {name: 'week', label: 'Woche'},
      {name: "month", label: "Monat"}
    ]

  
    const getTakenOptions = (date, day) => {
      // calendar starts at wed
      const dayValueFromMid = DaysEnum[day] - DaysEnum["Mittwoch"]
      let choosedDay = new Date(date);
      // set the choosen day from the checkbox
      choosedDay.setDate(choosedDay.getDate() + dayValueFromMid);

      return apData.filter((date) => choosedDay.getDate() === date.startDate.getDate()
      ).map((date) => TimeHelper.timeSlotFromDate(date.startDate, date.endDate))
    }

    const currendDateChanged = (date) => {
      setCurrentDay(date);
    }



    /** cause the table used to work with integer and our ComboBoxDay with string*/
    const excludedDaysToIntArr = () => excludedDays.map((day) => parseInt(day))
    

    /**
     * 
     * @param {ComboBoxDayEvent} e will be called if an day for an appointment
     * is choosed 
     */
    const dayIsSet = (day) => {
      setTakenOptions(getTakenOptions(currendDate, day));
    }

    /**
     * 
     * @param {RadioButtonGroupEvent} e will be either month or week
     * to recognize which calender should be displayed 
     */
    const valueChanged = (e) =>{
        setCalendarType({...setCalendarType, type : e.target.value });
     }

     /**
      * Days which are not in the excluded Ones and will be displayed
      * in the calender
      */
      const includedDays = Array.from(Array(7).keys()
      ).filter((it) => (!excludedDays.includes(it.toString()))
        ).map(it => (
          it.toString()));


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
        onCurrentDateChange={(date) => currendDateChanged(date)}
        currentViewName={calendarType.type}
        defaultCurrentDate={currendDate}
        />

        <EditingState  a/>
        <IntegratedEditing />
        <WeekView name="week"
          startDayHour={startDayHour ? startDayHour : 8} 
          endDayHour={endDayHour ? endDayHour : 18}
          excludedDays={excludedDays ? excludedDaysToIntArr() : [0 , 6]}
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
            onValueChange={(e) => dayIsSet(e)}
            />

          <ComboBoxTime 
            label={"Uhrzeit"}
            startHour={startDayHour}
            endHour={endDayHour}
            timespan={cellDuration}
            disabledOptions={takenOptions ? takenOptions: null}
            />

        </Stack>
    </Container>);
}

export default Calendar;