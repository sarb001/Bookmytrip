import React, { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import axios from 'axios';
import { DateRangePicker } from 'react-date-range';
import { differenceInDays } from 'date-fns';

const CalendarNavbar = () => {

   const [startDate,setstartDate] = useState(new Date());
   const [endDate,setendDate]     = useState(new Date());

     const date = dayscheck;

     const handleclick = (ranges) => {
          setstartDate(ranges.selection.startDate);
          setendDate(ranges.selection.endDate);
    }
    
     const selectionRange = {
        startDate : startDate,
        endDate : endDate,
        key   : 'selection',
        color :  'black'
     };

      var  dayscheck = differenceInDays(endDate,startDate);
      console.log('days in check -',dayscheck);

  return (
    <>
    <div className="App" style = {{display:'grid',gridTemplateColumns:'1fr 1fr'}}>
         <div className = "text-center">
            <DateRangePicker   ranges = {[selectionRange]}  
            minDate={new Date()} onChange = {handleclick}  />
        </div>
    </div>
    </>
  )
}

export default CalendarNavbar

