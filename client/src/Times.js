import {useState} from 'react';
import styled from 'styled-components';


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
                        <Button onClick={(ev)=> displayInfo(ev)}>{times}</Button>
                    </div>
                )
            })}
            <Confirmation>
      {info ? `Your appointment is confirmed at ${booking} ${date.toDateString()}` : null}
    </Confirmation>
        </div>
    )
};

export default Times ; 

const Button =styled.button`
background-color: #edfafa;
border:none;

&:hover {
    background-color: #105b72c2;
  }
`;

const Confirmation = styled.div`
margin:15px; 

`;