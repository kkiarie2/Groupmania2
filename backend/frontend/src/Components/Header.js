import  '../Styles/css/Header.css';
import Navbar from './Navbar'
import Profile from './Profile'
import {imageRoute} from '../api'

export default function Header({src}){

//console.log({src})

    return(
        <header className="header">

        <div className='profile--imgdiv'>
            <img src='icon-left-font-monochrome-black.svg' className='header--icon'/>
            <img src= {src}  className='header--image'/>
                
        </div> 

        <Navbar />
  
        
        
        </header>

    )
}