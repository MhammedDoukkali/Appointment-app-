import styled from "styled-components";
import Logo from "./Logo";
import {useNavigate} from "react-router-dom";


const SignUp = () => {

  const navigate = useNavigate();
    
    return (
        <Wrapper>
          <Logo/>
    <form>
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    
    <label >Email</label>
    <input type="text" placeholder="Enter Email"/>

    <label >Password</label>
    <input type="password" placeholder="Enter Password"/>

    <label >Repeat Password</label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>
    
    <label>
      <input type="checkbox"  /> Remember me
    </label>
    
    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

  
      <Button type="submit" onClick={()=>navigate("/")}>Sign Up</Button>
    
</form>
</Wrapper>
    )
};

export default SignUp; 

const Wrapper = styled.div`
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
`;
const Button = styled.button`
background-color: #4691f6;
border: none;
color: #f5fbff;
padding: 10px 25px;
`