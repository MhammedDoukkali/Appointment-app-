import { BrowserRouter as Router,  Routes,  Route,} from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";


const App = () => {


  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/profile"/>
        <Route path="/"/>
      </Routes>
    </Router>
  );
}

export default App;
