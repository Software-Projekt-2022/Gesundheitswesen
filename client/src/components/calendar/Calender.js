/* Scheduling Component */
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import { Scheduler, WeekView, MonthView, Appointments,  Toolbar, DateNavigator , TodayButton } from '@devexpress/dx-react-scheduler-material-ui';
import { useState, useEffect } from 'react';

import { createAppointment } from "../../actions/appointment";


import RadioButtonGroup from '../common/RadioButtonGroup';

import { Container } from '@material-ui/core';
import Stack from '@mui/material/Stack';

import ComboBoxDay from '../common/ComboBoxDay';
import ComboBoxTime from '../common/ComboBoxTime';
import DaysEnum from '../enums/DaysEnum';
import TimeHelper from './TimeHelper';
import { Button, Typography } from '@mui/material';
import CalendarConfigurator from './CalendarConfigurator';
import { useSelector, useDispatch } from 'react-redux';
import ComboboxReason from '../common/ComboBoxReason';
import { EMAIL } from '../../constants/actionTypes';


const Calendar = ( {id, appointmentData} ) => {


  const dispatch = useDispatch();

  const calendar = useSelector((state) => state.CalendarReducer);

  let calendarAvail = undefined;
  
  let endDayHour, startDayHour, cellDuration = undefined
  let excludedDays =[]

  if(calendar.length > 0){
    /** Our store could have more than one calendar */
    const specificCalendar = calendar.find((data) => data.id_expert === id)
    if(specificCalendar !== undefined){
      calendarAvail = true
      try{
        /** extract data */
        endDayHour = parseFloat(specificCalendar.endDayHour)
        startDayHour = parseFloat(specificCalendar.startDayHour)
        cellDuration = parseInt(specificCalendar.cellDuration)
      } catch (e){
        console.log(e)
      }
      excludedDays = specificCalendar.excludedDays.split(''
      ).map((letter, index) => {
        if(letter === "1") return index.toString()
        else return null
      }).filter((it) => it !== null);
    }
  }

    useEffect(() => {
      setApData(appointmentData)
    }, [dispatch, appointmentData]);
    
    /** Radiobutton Hook for CalenderTyp */
    const [calendarType, setCalendarType] = useState( { type: "week" } )

    /** ComboBoxDay Hook for choosed Day / Appointments*/
    const [appointments, setAppointments] = useState(null)

    /** ComboboxDay Hook Real Date */
    const [day, setDay] = useState('')

    /** Data Hook for the current Time */
    const [currendDate, setCurrentDay] = useState(new Date())

    /** Data Hook for loadet Data */
    const [apData, setApData] = useState( appointmentData )

    /** ComboBoxTime Hook for choosen time */
    const [time, setTime] = useState (null)

    /** ComboboxReason Hook */
    const [reason, setReason] = useState(null)

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
      const diff =  DaysEnum[day] - date.getDay()
      let choosedDay = new Date(date)
      // set the choosen day from the checkbox
      choosedDay.setDate(choosedDay.getDate() + diff)
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
    const dayIsSet = (v) => {
      const value = v.props.value
      setDay(value.toString());  
      setAppointments(getAppointments(getChoosedDay(currendDate, DaysEnum[value])));
    } 
    
    /**
     * @param {RadioButtonGroupEvent} e will be either month or week
     * to recognize which calender should be displayed 
     * Hook @see CalendarType
     * RadioButtonGroup
     */
    const valueChanged = (e) => setCalendarType({...setCalendarType, type : e.target.value });

    const reasonIsSet = (reason) => setReason(reason);
     
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

      const dispatchAppointment = (e) => {
 

        //const creator = window.localStorage.getItem(EMAIL)

        const creator = "TestCreator"

        if(creator === null) return

        const createDate = (time) => {
          const specificTime = time.split(":");
          const date = new Date(getChoosedDay(currendDate, DaysEnum[day]));
          date.setHours(parseInt(specificTime[0]), parseInt(specificTime[1], 0))
          return date;
        }

        const startEnd = time.split(" - ")
        const startDate = createDate(startEnd[0])
        const endDate = createDate(startEnd[1])

        const appointment ={
          id_expert : id,
          startdate : startDate,
          enddate : endDate,
          reason : reason,
          creator : creator
        }

        dispatch(createAppointment(id, appointment))
        /** clear */
        setDay('')
        reasonIsSet(null)
        timeIsSet(null)
      }


     


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

      {calendarType.type !== "week" ? <></> : <Stack visibility={false} direction="row" spacing={5} marginTop="70px" justifyContent="center" alignContent="center">        
                            
            <ComboBoxDay 
                days={includedDays}
                onValueChange={(e) => dayIsSet(e)}
                value={day}
                />
  
              <ComboBoxTime 
                label={"Uhrzeit"}
                startHour={startDayHour}
                endHour={endDayHour}
                timespan={cellDuration}
                disabledOptions={appointments ? appointments: null}
                onChange={(e) => timeIsSet(e)}
                value={time}
                />

                <ComboboxReason 
                  disabled={time ? false : true} 
                  onValueChange={(e) => reasonIsSet(e)}/>
  
            <Button 
                disabled={reason ? false : true} 
                onClick={(e) => dispatchAppointment(e)} 
                variant="contained" 
                color="primary" 
                size="large" 
                type="submit">
                    Bestätigen
            </Button>
  
            </Stack>}
    </Container>);
}

export default Calendar;