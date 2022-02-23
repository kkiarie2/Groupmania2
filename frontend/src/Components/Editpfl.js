import React from 'react'


const Editpfl = () =>{
        const [profileData, setProfileData] = React.useState(
            {profileImg: "", firstName: "", birthDay: "", hobbies: ""}
        )
        /*
        console.log(profileData.comments)
        
        function handlePflChange(event) {
            setProfileData(prevProfileData => {
                return {
                    ...prevProfileData,
                    [event.target.name]: event.target.value
                }
            })
        }

     function profileSubmit(event){
            event.preventDefault()
            console.log()
            try {
                const response = await api.post('http://localhost:4000/api/posts/addpost', newProfile);
                const newProfile = response.data;
                
                history.push('/profile');
              } catch (err) {
                console.log(`Error: ${err.message}`);
              }
        }


        */




    return(
        <div className="profile--container">
            <form> 
                    <label htmlFor="name" className="pfl--label">
                        Profile picture:
                        <input
                        type="file" 
                        id="profileImg"
                        name="profileImg"
                        required
                        value={profileData.profileImg}
                       // onChange={handlePflChange}
                        />
                </label>
                             
                <label htmlFor="name" className="pfl--label">Name:
                            <input 
                            type="text"
                            id="name"
                            name="firstName"
                            required
                            value={profileData.firstName}
                         //   onChange={handlePflChange}
                            />
                    </label> 


                            <label htmlFor="department" className="pfl--label"> Birth Day:
                            <input 
                            id="birthDay"
                            type="Date"
                            name="birthDay"
                            required
                            value={profileData.birthDay}
                           // onChange={handlePflChange}

                            />
                    </label> 

                    <label htmlFor="hobbies" className="pfl--label"> Hobbies:
                            <textarea 
                            id="hobbies"
                            type="text"
                            name="hobbies"
                            required
                            value={profileData.hobbies}
                           // onChange={handlePflChange}
                            />
                    </label> 


                    <button className="post--btn btn">Submit Changes</button>

                
                
                
                
                
                
                </form>
            
            
            
            
            
            
            </div>
    )
}






export default Editpfl