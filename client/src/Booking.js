import { useState } from "react";
import Calendar from 'react-calendar';
import styled from "styled-components";
import Time from "./Time";


const Booking = () => {

    const [date, setDate] = useState(new Date());
    const [showTime, setShowTime] = useState(false);

    const onChange = (nextValue) => {
        setDate(nextValue);
      }

    return (
        <>
        <h1>Appointment</h1>
        <Container>
        <Calendar 
        onChange={onChange} 
        value={date} 
        onClickDay={() => setShowTime(true)}
        />
        </Container>
        <div>
            {date.length > 0 ? (
                <p>
                    <span>Start : </span>
                    {date[0].toDateString()}
                    
                    <span>End:</span>{date[1].toDateString()}
                </p>
                        ) : (
                <p>
                    <span></span>{date.toDateString()}
                </p> 
            
            )}
            <Time showTime={showTime} date={date}/>
        </div>
        </>
    )
}; 

export default Booking; 

const Container=styled.div`

.react-calendar { 
  width: 700px;
  max-width: 100%;
  background-color: #edfafa;
  color: black;
  border-radius: 8px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  border: 2px groove;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.125em;
  text-align:center;
 }

 .react-calendar__navigation button {
  color: black;
  min-width: 44px;
  background:none;
  font-size: 16px;
  margin: 15px;
  text-align:center;
 }
 
 .react-calendar button {
  margin: 5px;
  outline: none;
  background-color: #edfafa;
  border: none;
  text-align:center;
  &:hover {
    background-color: #105b72c2;
  }
}

.react-calendar__tile--now:enabled:hover,
.react-calendar__tile--now:enabled:focus {
  background: red;
}

`