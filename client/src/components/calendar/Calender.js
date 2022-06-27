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
import { Button, Typography } from '@mui/material';
import CalendarConfigurator from './CalendarConfigurator';
import { useSelector } from 'react-redux';


/**
 * 
 * 
 */
const Calendar = ( {id} ) => {

  const {calendar} = useSelector((state) => state);

  const specificCalendar = calendar.find((calendar) => calendar.id_expert === id)

  let calendarAvail = undefined;
  
  let endDayHour, startDayHour, cellDuration = undefined
  let excludedDays =[]

  if(specificCalendar !== undefined){
    calendarAvail = true
    endDayHour = specificCalendar.endDayHour
    startDayHour = specificCalendar.startDayHour
    cellDuration = specificCalendar.cellDuration
    excludedDays = specificCalendar.excludedDays.split(''
    ).map((letter, index) => {
      if(letter === "1") return index.toString()
      else return null
    }).filter((it) => it !== null);
  }



    /** Radiobutton Hook for CalenderTyp */
    const [calendarType, setCalendarType] = useState( { type: "week" } )

    /** ComboBoxDay Hook for choosed Day*/
    const [day, setDay] = useState(null)

    /** Data Hook for the current Time */
    const [currendDate, setCurrentDay] = useState("2018-07-25")

    /** Data Hook for loadet Data */
    const [apData, setApData] = useState( appointmentDemoData )

    /** ComboBoxTime Hook for choosen time */
    const [time, setTime] = useState (null)

    const buttonValues = [
      {name: 'week', label: 'Woche'},
      {name: "month", label: "Monat"}
    ]

  
    /**
     * 
     * @param {Date} date returned from the calender as a value, will be the middle of the week @see ViewState 
     * @param { String } day of the key that was choosen in the ComboBoxDay Component 
     * Key of @See DaysEnum  
     * @returns Date 
     */
    const getChoosedDay = (date, day) => {
      // We need the middle, cause the day the calendar used to do this
      const middle = Math.round((7 - excludedDays.length) / 2);
      const dayValueFromMid = DaysEnum[day] - DaysEnum[DaysEnum[middle]]
      let choosedDay = new Date(date)
      // set the choosen day from the checkbox
      choosedDay.setDate(choosedDay.getDate() + dayValueFromMid)
      return choosedDay
    }

    /**
     * 
     * @param { Date() } choosedDay date in Date() Format @see getChoosedDay 
     * @returns a List of appointments of the Day
     */
      const getAppointments = (choosedDay) =>  apData.filter((date) => choosedDay.getDate() === date.startDate.getDate(
        )).map((date) => TimeHelper.timeSlotFromDate(date.startDate, date.endDate))

    

    /** Hook @see date */
    const currendDateChanged = (date) => setCurrentDay(date);
    
    /** cause the table used to work with integer and our ComboBoxDay with string*/
    const excludedDaysToIntArr = () => excludedDays.map((day) => parseInt(day));

    /**
     * @param {ComboBoxDayEvent} e will be called if an day for an appointment
     * is choosed 
     * Hook @see day 
     * ComboBoxTime
     */
    const dayIsSet = (day) => setDay(getAppointments(getChoosedDay(currendDate, day)));
    
    /**
     * @param {RadioButtonGroupEvent} e will be either month or week
     * to recognize which calender should be displayed 
     * Hook @see CalendarType
     * RadioButtonGroup
     */
    const valueChanged = (e) => setCalendarType({...setCalendarType, type : e.target.value });
     
    /**
     * 
     * @param { String } time that was displayed on the ComboBoxTimeButton
     * 
     */
    const timeIsSet = (time) => setTime(time);

     /**
      * Days which are not in the excluded Ones and will be displayed
      * in the calender
      */
    const includedDays = Array.from(Array(7).keys()
        ).filter((it) => (!excludedDays.includes(it.toString()))
      ).map(it => (
      it.toString()));


    return (
      calendarAvail === undefined ? <CalendarConfigurator id={id}/>:
    <Container id="calendar">
      <Typography variant="h4" style={{ margin: "20px", display: 'flex', justifyContent: 'center', }}>Machen sie noch heute einen Termin aus</Typography>
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
          startDayHour={startDayHour} 
          endDayHour={endDayHour}
          excludedDays={excludedDaysToIntArr()}
          cellDuration={cellDuration}
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
            disabledOptions={day ? day: null}
            onChange={(e) => timeIsSet( e )}
            />

        <Button 
            disabled={time ? false : true} 
            onSubmit={(e) => console.log(e)} 
            variant="contained" 
            color="primary" 
            size="large" 
            type="submit">
                Bestätigen
        </Button>

        </Stack>
    </Container>);
}

export default Calendar;