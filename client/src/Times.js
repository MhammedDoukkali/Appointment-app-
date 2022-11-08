import {useState} from 'react';
import Calendar from 'react-calendar';


const Times = ({date}) => {

const availableTime = ["08:00", "09:30", "10:00", "14:00", "15:30", "17:00"]

const [booking, setBooking] = useState(null);
const [info, setInfo] = useState(false); 

const displayInfo = (ev) => {
    setInfo(true);
    setBooking(ev.target.innerText);
 };


    return (
        <div>
            {availableTime.map(times => {
                return (
                    <div>
                        <button onClick={(ev)=> displayInfo(ev)}>{times}</button>
                    </div>
                )
            })}
            <div>
      {info ? `Your appointment is set to ${booking} ${date.toDateString()}` : null}
    </div>
        </div>
    )
};

export default Times ; 