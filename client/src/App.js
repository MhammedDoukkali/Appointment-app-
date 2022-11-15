import { BrowserRouter as Router,  Routes,  Route,} from "react-router-dom";
import Booking from "./Booking";
import Login from "./Login";
import SignUp from "./SignUp";
import GlobalStyles from "./GlobalStyles";







const App = () => {
  
  

  return (
    
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/profile"/>
        <Route path="/booking" element={<Booking/>}/>
      </Routes>
    </Router>
  
  );
}

export default App;
