import { Link, Redirect } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../Styles/css/Profile.css'
import Header from './Header'
import {checkSession, imageRoute, apiRoute, fetchProfile} from '../api'

 
export default function Profile(){
    const [myProfile, setMyProfile] = useState({})
    
        useEffect(async () => {
         
          const profile = await fetchProfile(checkSession());
          if(profile)setMyProfile(profile)
        }, [])



    
    if (checkSession()){  
      console.log(myProfile)
    
    return( 
        <div className='profile--container'>
            <Header src={`${imageRoute}/${myProfile.image}`} />
              <div className="profile--imgdiv">
              <div className="profile--dept"><img className="profile--image" src={`${imageRoute}/${myProfile.image}`}/></div>          
            
      

            </div>
            <div className="profile--info">
                <p className="profile--name">
                  <span className='Profile--info-tags'>First Name: </span>
                      {myProfile.firstname}
                </p>
                <p className="profile--dept">
                  <span className='Profile--info-tags'>Birth Day: </span>
                      {myProfile.birthday}
                </p>
                <p className="profile--dept">
                  <span className='Profile--info-tags'>Hobbies: </span>
                      {myProfile.hobbies}
                </p>
                
            
            
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
        return <Redirect from="/profile" to="/login" />
     }
}

