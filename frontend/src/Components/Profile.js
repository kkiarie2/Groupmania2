import { Link, Redirect } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../Styles/css/Profile.css'
import Header from './Header'
import {checkSession, imageRoute, apiRoute} from '../api'

 
export default function Profile(){
    const [myProfile, setMyProfile] = useState({})
    
    
    const fetchProfile = async (token) => {
        console.log(token)
        try {
          const response = await fetch(apiRoute + '/auth/myprofile', {
            method: "GET", 
            headers:{
            'Accept': '*/*',
            'Authorization': `Bearer ${token}`, 
            }
          });
          const data = await response.json()
          setMyProfile(data.user)
          console.log(data.user)
          
          
        } catch (err) {
                       console.log(err);     
        }
      }
    
        useEffect(() => {
         
        
          fetchProfile(checkSession());
        }, [])



    
    if (checkSession()){  
    
    return( 
        <div className='profile--container'>
            <Header />
            <div className="profile--imgdiv">
            <div className="profile--dept"><img className="profile--image" src={`${imageRoute}/${myProfile.image}`}/></div>          
            
        

            </div>
            <div className="profile--info">
                <p className="profile--name">{myProfile.firstname}</p>
                <p className="profile--dept">{myProfile.birthDay}</p>
                <p className="profile--dept">{myProfile.hobbies}</p>
                
            
            
            </div>
            <div className="edit--div">

                    <Link to='/editpfl'>
                        <button className="btn-edit-pfl button--edit btn">Edit Profile</button> 
                    </Link>
    
                <button className="btn--delete--pfl delete--button btn" >Delete Profile</button>
                {/*onClick={deleteProfile}*/}

             </div>
            <main className="profile--posts"></main>
        
        
        </div>

    )} else{
        return <Redirect from="/home" to="/login" />
     }
}

