import React, {useState} from "react";
import DatePicker from 'react-date-picker';
import './DatePickerComponent.css'


const DatePickerComponent = () => {
    const [value, onChange] = useState(new Date());

     return (
         <div data-testid="datepicker-component-id">
             <DatePicker calendarClassName="project-calendar"
                 onChange={onChange}
                 value={value}
             />
         </div>
     )
}

export default DatePickerComponent
