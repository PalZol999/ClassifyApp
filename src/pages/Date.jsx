import React, { useState } from 'react';
import { add, format } from 'date-fns';
import { OPENING_HOURS_BEGINNING , OPENING_HOURS_END, OPENING_HOURS_INTERVAL } from '../constans/config'


const DateCompo = ({}) => {
  const [date, setDate] = useState({
    justDate: null,
    dateTime: null,
  });

  const getTimes = () => {
    if (!date.justDate) return;

    const { justDate } = date;

    const beginning = add(justDate, { hours: OPENING_HOURS_BEGINNING}); // opening time
    const end = add(justDate, { hours: OPENING_HOURS_END }); // closing time
    const interval = OPENING_HOURS_INTERVAL; // in min
    const times= []; 

    for (let i = beginning; i <= end; i = add(i, { minutes: interval })) {
      times.push(i);
    }

    return times;
  };

  const times = getTimes();

  return (

        <div className="flex flex-wrap gap-4 justify-center">
     
          {times?.map((time, i) => (
            <div key={`time-${i}`} className="rounded-sm bg-gray-100 p-2">
              <button
                type="button"
                onClick={() => setDate((prev) => ({ ...prev, dateTime: time }))}
              >
                {format(time, 'kk:mm')}
              </button>
              
            </div>
          ))}
        </div>
  );
  };

export default DateCompo;