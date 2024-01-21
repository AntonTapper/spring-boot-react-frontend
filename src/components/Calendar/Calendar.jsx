import React, { useState } from 'react'

const Calendar = () => {

    const [selectedData, setSelectedDate] = useState(null);

    const createCalendar = () => {
        const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
        const currentDate = new Date();
        const currentDay = currentDate.getDate();
        const currentMonth = currentDate.getMonth();

        const days = [];

        for(let i = 1; i <= daysInMonth; i++) {
            const isSelected = i === currentDay && currentMonth === new Date().getMonth();
            days.push(
                <div
                    key={i}
                    className={`day ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleDayClick(i)}
                >
                    {i}
                </div>
            );
        }
        return days;
    }

    const handleDayClick = (day) => {
        setSelectedDate(day);
        alert(`You selected ${day}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`);
    }

  return (
    <div className='calendar'>{createCalendar()}</div>
  )
}

export default Calendar