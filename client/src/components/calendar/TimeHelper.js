class TimeHelper{
    
    static timeAsInt(hours, minutes) {
        if(minutes === 0)
            return hours * 60
        return  hours * 60 + minutes * 60
    }

    static minutesToDecimal(minutes) {
        return 1 / 60 * minutes
    }

    static decimalToMinutes(decimal){
        return 60 * decimal
    }

    static minutesInMillis(minutes){
        return minutes * 60 * 1000;
    } 

    /**
     * 
     * @param { int } startHour in decimal, even 9.35, (0.75 -> 45 minutes)
     * @param { int } timeSpan lenght of the calendar cell in minutes 
     * @returns { JSON } 
     * {          
     *      "startHour" {int},
            "startMinute": {int}, 
            "endHour": {int}, 
            "endMinute": {int},
            "startInteger": {int},
            "endInteger": {int}
        }
     */
    static timeSlot(startHour, timeSpan){
        // start of calendar to regular minutes
        const start = this.decimalToMinutes(startHour)
        // timespan to regular minutes
        const timeSpanToDec = this.minutesToDecimal(timeSpan);
        // end is timespan minutes + start
        const end = this.decimalToMinutes(startHour + timeSpanToDec)
        // calculate hours and minutes of start and end
        const startObj = this.timeAsHoursAndMinutes(start)
        const endObj = this.timeAsHoursAndMinutes(end) 

        return this.createTimeSlotObj(
            startObj.hours,
            startObj.minutes, 
            endObj.hours, 
            endObj.minutes,
            start,
            end
        )
    }

    static createTimeSlotObj(
        startHour, 
        startMinute, 
        endHoure, 
        endMinute, 
        startInteger, 
        endInteger
        ){
            return Object.freeze({
            "startHour": startHour,
            "startMinute": startMinute,
            "endHour": endHoure,
            "endMinute": endMinute,
            "startInteger": startInteger,
            "endInteger": endInteger
        })
    }

    static timeSlotFromDate(startDate, endDate){
        const startHours = startDate.getHours();
        const startMinutes = startDate.getMinutes()
        const endHours = endDate.getHours();
        const endMinutes = endDate.getMinutes();
        const startInteger = this.decimalToMinutes(startHours) + startMinutes
        const endInteger = ((this.decimalToMinutes(endHours) + endMinutes) - startInteger) + startInteger
        
        return this.createTimeSlotObj(
            startHours,
            startMinutes,
            endHours,
            endMinutes,
            startInteger,
            endInteger
        )
    }

    static listOfTimeSlots(startHour, timeSpan, slotAmount) {
        const timeSlots =  Array.from(new Array(slotAmount)
        ).map((_, index) => {
            let extraTime = index * timeSpan
            extraTime = this.minutesToDecimal(extraTime)
            const start = startHour + extraTime
            return this.timeSlot(start, timeSpan)
        })
        return timeSlots
    }

    /**
     * 
     * @param { int } integer full minutes of the day
     * @returns { JSON } {"hours": hours, "minutes", minutes}
     */
    static timeAsHoursAndMinutes(integer) {
        let minutes = integer
        let hours = minutes / 60
        // Even or not even
        if(hours % 1 !== 0){
            // Get "uneven Minutes" like 45 minutes
            minutes = 60 * (hours % 1)
            hours = Math.floor(hours)
        } else {
            minutes = 0
        }
        return {"hours": hours, "minutes": minutes}
    }



}


export default TimeHelper