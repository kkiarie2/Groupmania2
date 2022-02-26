import React from 'react'
import {useHistory, Redirect} from 'react-router'
import {checkSession, apiRoute}from '../api'


const Editpfl = () =>{
        const history = useHistory();
        const [profileData, setProfileData] = React.useState(
            {image: "", firstName: "", birthDay: "", hobbies: ""}
        )
        
        console.log(profileData.comments)
        
        function handlePflChange(event) {
            const {name, value} = event.target;
            setProfileData(prevProfileData => {
                return {
                    ...prevProfileData,
                    [name]: event.target.value
                }
            })
        }

     




        
      const handleSubmit = async (event) => {
        console.log({event})
        event.preventDefault()
        const formData = new FormData(event.target)
        const content = Object.fromEntries(formData);
        console.log({content})



        try {
          
           async function postData(content) {
             var url =apiRoute + '/auth/myprofile'
           var data = new FormData() 
           data.append('firstname', content.firstname)
           data.append('image', content.image)
           data.append('lastname', content.lastname)
           data.append('birthday', content.birthday)
           data.append('hobbies', content.hobbies)
           const objectx = {
              method: 'POST',
              headers: {
               // 'Content-Type': 'multipart/form-data',
                'Accept': '*/*',
                'Authorization': `Bearer ${checkSession()}`,                
              },
              body: (data)
              
            };




           const response = await fetch(url, objectx)
            return response.json(); 
          }
          
          postData(content)
            .then(data => 
              history.push('/profile')
              );

          
        } catch (err) {
          console.log(`Error: ${err.message}`);
        }
      }

        

      if(checkSession()){
        


    return(
        <div className="profile--container" onSubmit={handleSubmit}>
            <form> 
                    <label htmlFor="profileImg" className="pfl--label">
                        Profile picture:
                        <input
                        type="file" 
                        id="profileImg"
                        name="image"
                        required
                        />
                </label>
                             
                <label htmlFor="firstname" className="pfl--label">First Name:
                            <input 
                            type="text"
                            id="lastname"
                            name="firstname"
                            required
                            />
                    </label> 
                    <label htmlFor="lastname" className="pfl--label">Last Name:
                            <input 
                            type="text"
                            id="lastname"
                            name="lastname"
                            required
                            />
                    </label> 


                            <label htmlFor="birthDay" className="pfl--label"> Birth Day:
                            <input 
                            id="birthDay"
                            type="Date"
                            name="birthday"
                            required

                            />
                    </label> 

                    <label htmlFor="hobbies" className="pfl--label"> Hobbies:
                            <textarea 
                            id="hobbies"
                            type="text"
                            name="hobbies"
                            required
                            />
                    </label> 


                    <button className="post--btn btn">Submit Changes</button>     
                
                
                
                </form>
            
            
            
            
            
            
            </div>
    )} else{
      return <Redirect from="/home" to="/login" />
   }
}






export default Editpfl