import  '../Styles/css/Header.css';
import Navbar from './Navbar'

export default function Header(){
    return(
        <header className="header">

        <div className='profile--imgdiv'>
            <img src='icon-left-font-monochrome-black.svg' className='header--icon'/>
            <img src='picture.png'  className='header--image'/>
                
        </div> 

        <Navbar />
  
        
        
        </header>

    )
}