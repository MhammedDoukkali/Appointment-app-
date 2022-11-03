import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components"; 


const Login = () => {

const navigate = useNavigate();

    return (
        <Wrapper>
      <form onSubmit={(ev) => handleSubmit(ev)}>
        <label>Username</label>
        <input
          type="text"
        //   required={true}
        //   value={state.username}
        //   onChange={(ev) => handleChange(ev, "username")}
        />

        <label>Password</label>
        <input
          type="password"
        //   required={true}
        //   value={state.passWord}
        //   onChange={(ev) => handleChange(ev, "passWord")}
        />
        <button type="submit">Log In</button>
        <div>Not a member ? <Buzz onClick={()=>navigate("/signup")}>Signup now</Buzz></div>
      </form>
    </Wrapper>
    )
}; 

export default Login; 

const Wrapper = styled.div`

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10em;
}

label, button {
margin: 1em;
}
`;

const Buzz = styled.button`
background-color: white;
border: none;

&:hover{
color:#4095c6;
}

`;

