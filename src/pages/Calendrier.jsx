import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';
import { add, format } from 'date-fns';
import '../styles/Days.css';
import Button from '@mui/material/Button';
import { OPENING_HOURS_BEGINNING, OPENING_HOURS_END, OPENING_HOURS_INTERVAL } from '../constants/config';
import Workout from "../components/Workout"


const Calendar = () => {
  const [date, setDate] = useState({
    justDate: null,
    dateTime: null,
  });

  const getTimes = () => {
    if (!date.justDate) return;

    const { justDate } = date;

    const beginning = add(justDate, { hours: OPENING_HOURS_BEGINNING }); // opening time
    const end = add(justDate, { hours: OPENING_HOURS_END }); // closing time
    const interval = OPENING_HOURS_INTERVAL; // in min
    const times = [];

    for (let i = beginning; i <= end; i = add(i, { minutes: interval })) {
      times.push(i);
    }

    return times;
  };

  const times = getTimes();

  const handleGoBack = () => {
    setDate((prev) => ({ ...prev, justDate: null, dateTime: null }));
  };

  return (
    <div className="datedisp">
      {date.justDate ? (
        <div className="days">
          <div className='text-center pt-6'>
          <Workout selectedDate={date.justDate} />
          </div>
          <div className="hours flex flex-wrap justify-center">
            <div style={{ color: 'white' }}> Choose your class:</div>
            {times?.map((time, i) => (
              <div key={`time-${i}`} className="hours">
                <button style={{ color: 'white' }}
                  type="button"
                  onClick={() => setDate((prev) => ({ ...prev, dateTime: time }))}
                >
               {format(time, 'kk:mm')}
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <ReactCalendar
          minDate={new Date()}
          className="REACT-CALENDAR p-2"
          view="month"
          onClickDay={(date) => setDate((prev) => ({ ...prev, justDate: date }))}
        />
      )}
      {date.justDate && (
        <div className="center">
          <Button variant="contained" type="button" onClick={handleGoBack}>
            Go back to Calendar
          </Button>
        </div>
      )}
    </div>
  );
};

export default Calendar;