import "./App.css";

// Importing the React Router Dom
import { BrowserRouter as Router,Routes,Route, NavLink } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Profile from "./Components/Profile";

function App() {
  const navigationActive = (({isActive})=>{
    return {
      color:isActive?'white':'black',
      textDecoration: 'none'
    }
  })
  return (
    <Router>
      {/* Creating the Navigation Link to go from one route to another using the NavLink  */}
      <nav>
        <NavLink style={navigationActive} to="home">Home</NavLink>
        <NavLink style={navigationActive} to="about">About</NavLink>
        <NavLink style={navigationActive} to="contact">Contact</NavLink>
      </nav>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/profile/:username" element={<Profile/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default App;
