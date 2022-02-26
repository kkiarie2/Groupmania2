
import './Styles/css/App.css';
import {React, useState, useEffect} from 'react';
import {  BrowserRouter as Router,  Switch, Route, Link, useHistory } from "react-router-dom";
import Signup from './Components/Signup';
import './Styles/css/signup.css'
import Login from './Components/Login'
import Home from './Components/Home'
import Newpost from './Components/Newpost'
import Editpost from './Components/Editpost'
import Post from './Components/Post'
import Header from './Components/Header';  
import Footer from './Components/Footer'; 
import Profile from './Components/Profile';
import Navbar from './Components/Navbar';
import Welcomescreen from './Components/Welcomescreen';
import Editpfl from './Components/Editpfl';
import {apiRoute} from './api.js'




function App() {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postText, setPostText] = useState('');
  const [postImg, setPostImg] = useState('');
  const history = useHistory();



  


 
  /*

  const handleEdit = async (id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = { id, img: editImg, datetime, text: editText };
    try {
      const response = await api.put(`http://localhost:4000/api/posts/${id}`, updatedPost);
      setPosts(posts.map(post => post.id === id ? { ...response.data } : post));
      setEditText('');
      setEditImg('');
      history.push('/home');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

  const handleDelete = async (id) => {
    try {
      await api.delete(`http://localhost:4000/api/posts/${id}`);
      const postsList = posts.filter(post => post.id !== id);
      setPosts(postsList);
      history.push('/home');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }


*/



 

return (
    
    <div className="App">
         
                      
       <Router>
              <Switch>                     
                      <Route path="/signup"> <Signup /></Route>
                      <Route path="/home"> <Home /> </Route>
                      <Route path="/login" > <Login /></Route>
                      <Route path="/profile" > <Profile /></Route>
                      <Route path="/editpfl" > <Editpfl /></Route>
                      <Route path="/newpost" > <Newpost /> </Route>
                      <Route path="/post" > <Post /> </Route>
                      <Route path="/editpost" > <Editpost /> </Route>
                      <Route path="/" > <Welcomescreen /> </Route> 
                      
                    
            
              </Switch>
   </Router>  

          
    

    </div>

    
    
    
 
    
    
  );
}
  

export default App;

