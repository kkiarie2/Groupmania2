import { Link } from 'react-router-dom'
import '../Styles/css/Welcomescreen.css'
import Header from './Header';  
import Footer from './Footer'; 
import Login from './Login'; 
import Signup from './Signup'; 


export default function Welcome(){



           





        return(
            <>
                <Header />
            <div className="welcome--container" > 
            

            
            
                <div className=" welcome--div">
                    <p className='welcom--para'>Don't have an account?</p>
                    <button  className="welcome--button welcome--signup">
                        <Link to="signup">CREATE ACCOUNT </Link>
                    </button>
                </div> 
                <div className=" welcome--div">
                    <p className='welcom--para'>Already have an account?</p>
                    <button  className="welcome--button welcome--login"> 
                            <Link to="login"> LOGIN</Link>
                    
                    
                    
                    </button>

                    
                    
                
                </div> 
           
                       
            </div>

            <Footer />

            </>
        )


}