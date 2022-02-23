import '../Styles/css/home.css'
import React, { useEffect } from 'react';
import { useHistory, Redirect, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header';
import Post from './Post'
import { AiFillLike, AiOutlineComment, AiOutlineLogout } from 'react-icons/ai';




export default function Home(){
/*    const history = useHistory();



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
                    <section className='post-text-div'>
                
                        <div className='profile--imgdiv'>
                            <img src='picture.png'  className='profile--image'/>
                        </div> 
                            <Link to="/newpost"><button className='btn btn--post'>Post Something</button></Link>
                    </section>
                     
                    <div className="all-posts">     
                    
                            
                                     <Post />
                                
                                
                    
                                        
                            
                            
                
                                           
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



