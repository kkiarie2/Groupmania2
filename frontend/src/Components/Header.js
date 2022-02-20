import  '../Styles/css/Header.css';
import Navbar from './Navbar'

export default function Header(){
    return(
        <header className="header">
        
         
        <img src='icon-left-font.png' className='header--icon'/>

        <h4> Hangouts</h4>

        <Navbar />
  
        
        
        </header>

    )
}