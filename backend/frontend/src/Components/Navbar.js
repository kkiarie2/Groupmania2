import '../Styles/css/Navbar.css';
import { Link, useHistory } from 'react-router-dom';



export default function Navbar(){
    const history = useHistory()
    const logout=()=>{
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

        history.push("/login")
    }
    
    return(
        <nav className="navbar">
            
                <button className="navbar--link "><Link to="/home">Home </Link> </button>
                <button className="navbar--link "> <Link to="profile">profile </Link></button>
                 <button  className="navbar--link3 " onClick={logout}>Log Out </button>
            
        </nav>
    )
}