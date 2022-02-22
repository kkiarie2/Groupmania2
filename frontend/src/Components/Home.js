import '../Styles/css/home.css'
import React, { useEffect } from 'react';
import { useHistory, Redirect, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header';
import { AiFillLike, AiOutlineComment, AiOutlineLogout } from 'react-icons/ai';




export default function Home(){
    const history = useHistory();


/*
    const checkSession=() => {
        var token = null
      var allCookies = document.cookie.split(";")
      allCookies.map((cookie)=>{
        var c = cookie.split("=");
        console.log(c)
        if(c[0] === 'token'){
          token = (c[1])
        }
    })
    return token
}
       
     
    
    
    
    
    
  if (checkSession()){  */

   
    return(
        
      <div className="home--container">
            
        <Header />

                <main className='main'>
                    <Link to="/newpost"><button className='btn btn--post'>Post Something</button></Link>

                    <div className="all-posts">
                    
                    <div className='post--div'>
                    <div className='publisher-div'>
                            <img src='picture.png'  className='publisher--image'/>
                    </div>
                    <div className='post-text-div'>
                            <div>
                                
                                
                                <p> 
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 
                                    1500s, when an unknown printer took a galley of type and scrambled it 
                                    to make a type specimen book. It has survived not only five centuries, 
                                    but also the leap into electronic typesetting, remaining essentially
                                    unchanged. It was popularised in the 1960s with the release of 
                                    Letraset sheets containing Lorem Ipsum passages, and more recently with 
                                    desktop publishing software like Aldus PageMaker including versions of
                                    Lorem Ipsum.
                                
                                </p>
                    
                                        
                            
                            </div> 
                
                            <div className='icons--div'>
                                
                                    <div className='icons--likes icons'>
                                        <AiFillLike/>
                                    
                                        <div className='icons--usersliked numbers'>50</div>
                                    </div> 
                                    
                                    <div className='icons--comment icons'>
                                        <AiOutlineComment />
                                        <div className='icons--comments--count numbers'>50</div>
                                    </div>
                                    <div className='edit--div '>
                                        <Link to="/editpost">
                                            <button className='button--edit edit--post'>Edit post</button>
                                        </Link>    
                                    </div>
                                    <div className='delete--div '>
                                        <button className='button-delete delete--post'>Delete Post</button>
                                    </div>
                                    
                                
                            </div>
                    
                    </div>
                
                
                    
                </div>






                    
                    </div>

                </main>

            




                <Footer/>
        </div>

    )  
//}
  //  else{
   //     return <Redirect from="/home" to="/login" />
   // }
}



