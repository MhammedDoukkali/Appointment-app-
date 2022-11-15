import { useState } from "react";
import Calendar from "react-calendar";
import Times from "./Times";

const Time = ({ showTime,date }) => {

    
    return (
        <div>
            {showTime ? <Times date={date}/> : null}
        </div>
    )
}; 

export default Time; 