import styled from "styled-components";


const SignUp = () => {

    
    return (
        <Wrapper>
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

    <div>
      <button type="submit">Sign Up</button>
    </div>
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