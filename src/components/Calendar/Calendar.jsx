import React, { useState } from 'react'
import '../Calendar/Calendar.css'

const Calendar = () => {

    const [selectedStart, setSelectedStart] = useState(null);
    const [selectedEnd, setSelectedEnd] = useState(null);

    const createCalendar = () => {
        const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
        const currentDate = new Date();
        const currentDay = currentDate.getDate();
        const currentMonth = currentDate.getMonth();

        const days = [];

        for(let i = 1; i <= daysInMonth; i++) {
            const isSelected = false;
            const isInRange = isDaySelected(i) && selectedStart !== selectedEnd;
            const dayClassName = `day ${isSelected ? 'selected' : ''} ${isInRange ? 'range' : ''} `
            days.push(
                <div
                    key={i}
                    className={dayClassName}
                    onClick={() => handleDayClick(i)}
                >
                    {i}
                </div>
            );
        }
        return days;
    }

    const handleDayClick = (day) => {
        console.log("Selected Start", selectedStart);
        console.log("Selected End", selectedEnd);
        if(!selectedStart) {
            // If start date is not selected, set it
            setSelectedStart(day);
        } else if(!selectedEnd) {
            // If end date is not selected, set it
            setSelectedEnd(day);
        } else {
            // If both start and end dates are selected, reset the selection
            setSelectedStart(day);
            setSelectedEnd(null);
        }
        //alert(`You selected ${day}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`);
    }

    const isDaySelected = (day) => {
        if(selectedStart && selectedEnd) {
            // Check if the day is within the selected range
            return day >= selectedStart && day <= selectedEnd;
        } else {
            // Check if the day is the selected start date
            return day === selectedStart
        }
    }

  return (
    <div className='calendar'>{createCalendar()}</div>
  )
}

export default Calendar