
import './Styles/css/App.css';
import {  BrowserRouter as Router,  Switch, Route, Link } from "react-router-dom";
import Signup from './Components/Signup';
import './Styles/css/signup.css'
import Login from './Components/Login'
import Home from './Components/Home'
import Header from './Components/Header';  
import Footer from './Components/Footer'; 
import Profile from './Components/Profile';
import Navbar from './Components/Navbar';
import Welcomescreen from './Components/Welcomescreen';
import { useState } from 'react';



function App() {

  return (
    
    <div className="App">
              
      
      
                      
       <Router>
              <Switch>                     
                      <Route path="/signup"> <Signup /></Route>
                      <Route path="/home"> <Home /> </Route>
                      <Route path="/login" > <Login /></Route>
                      <Route path="/profile" > <Profile /></Route>
                      <Route path="/" > <Welcomescreen /> </Route>
            
            </Switch>
      </Router> 


      

    </div>

    
    
    
 
    
    
  );
}
  

export default App;

