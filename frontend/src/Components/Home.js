import '../Styles/css/home.css'
import {React, useEffect, useState } from 'react';
import { useHistory, Redirect, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header';
import Post from './Post'
import Newpost from './Newpost'
import { AiFillLike, AiOutlineComment, AiOutlineLogout } from 'react-icons/ai';
import newPost from './Newpost';
import {apiRoute, checkSession} from '../api.js'





export default function Home(){
  const [posts, setPosts] = useState([])
  const history = useHistory();



  const fetchPosts = async () => {
    try {
      const response = await fetch(apiRoute + '/posts');
      const data = await response.json()
      setPosts(data.posts)
      console.log(data.posts)
      
      
    } catch (err) {
                   console.log(err);     
    }
  }

    useEffect(() => {
     
  
      fetchPosts();
    }, [])







 
        
    
  if (checkSession()){  








    return(
        
      <div className="home--container">
            
        <Header />

                <main className='main'>
                      <Newpost  token ={checkSession()} refresh={fetchPosts}/>
                     
                    <div className="all-posts">     
                          
                        {posts.map((post, index)=> <Post key={index} story={post.content} typeOfStory={post.type}/>  ).reverse()}
                                     
                                    
                            
                
                                           
                    </div>

                </main>

            




                <Footer/>
        </div>

    )  
}
   else{
       return <Redirect from="/home" to="/login" />
    }
}



