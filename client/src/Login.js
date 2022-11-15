import {useNavigate} from "react-router-dom";
import styled from "styled-components"; 
import Logo from './Logo'


const Login = () => {

const navigate = useNavigate();

    return (
      <>
        <Wrapper>
      <Logo/>
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
        <Button type="submit" onClick={()=>navigate("/booking")}>Sign in</Button>
        <div>Not a member ? <Buzz onClick={()=>navigate("/signup")}>Signup now</Buzz></div>
      </form>
    </Wrapper>
    </>
    )
}; 

export default Login; 

const Wrapper = styled.div`

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1em;
}

label, button {
margin: 1em;
}
`;

const Button = styled.button`
background-color: #4691f6;
border: none;
color: #f5fbff;
padding: 10px 25px;
`
const Buzz = styled.button`
background-color: #f5fbff;
border: none;

&:hover{
color:#4095c6;
}

`;

