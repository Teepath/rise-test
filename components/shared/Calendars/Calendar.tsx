import React, { useState } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import {User} from "../../../redux/type"

interface CalendarsProps{
  setSelectedDate?:(item:any)=>void;
  user?:User;
  setUser?:(item:any)=> void;
  selectedDate?: (item:any)=>void;
  isPlan?:boolean
}


const Calendars:React.FC<CalendarsProps> = ({setSelectedDate,user, setUser, selectedDate, isPlan}) => {
const today = new Date().getFullYear()

console.log(selectedDate, 'day');


  return (
    <Calendar
    onDayPress={(day:any) => {
        setSelectedDate(day.dateString);
        if(user){
          setUser({...user, date_of_birth:selectedDate})
        }

      }}
      minDate={isPlan?`${today+2}-01-10`:null}
      maxDate={isPlan?'2030-12-10':"2004-12-05"}
      style={{
        borderWidth: 1,
        borderColor: 'gray',
        height: 350,
        zIndex:20
      }}

      markedDates={{
        [selectedDate]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
      }}
      theme={{
        backgroundColor: "#57B9BB",
        calendarBackground: "#ffffff",
        textSectionTitleColor: "#b6c1cd",
        todayTextColor: "#57B9BB",
        dayTextColor: "#2d4150",
        textDisabledColor: "#d9e1e8",
        monthTextColor: "#57B9BB",
        arrowColor: "#57B9BB",
        textDayFontWeight: "300",
        textMonthFontWeight: "bold",
        textDayHeaderFontWeight: "500",
        textDayFontSize: 16,
        textMonthFontSize: 18,
        selectedDayBackgroundColor: "#57B9BB",
        selectedDayTextColor: "white",
        textDayHeaderFontSize: 16,
      }}
      initialDate= {!isPlan?'2004-12-05': `${today+2}-01-10`}
      />
  )
    }

    export default Calendars;