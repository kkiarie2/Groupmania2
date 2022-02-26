    import "../Styles/css/Newpost.css";
    import { React, useState} from 'react';
    import { Link } from 'react-router-dom';
    import {BiImageAdd} from "react-icons/bi"
    import { apiRoute } from "../api";  
      




    export default function Newpost({token, refresh}) {
      const [posts, setPosts] = useState([])
      const [formData, setFormData] = useState({
          post: "",
          image: ""
      })



      
      


      const handleSubmit = async (event) => {
       // console.log({event})
        event.preventDefault()
        const formData = new FormData(event.target)
        const content = Object.fromEntries(formData);
       // console.log({content})



        try {
          
           async function postData(content) {
             var url =apiRoute + '/posts/addpost'
           var data = new FormData() 
           data.append('post', content.post)
           data.append('image', content.image)
           const objectx = {
              method: 'POST',
              headers: {
               // 'Content-Type': 'multipart/form-data',
                'Accept': '*/*',
                'Authorization': `Bearer ${token}`,                
              },
              body: (data)
              
            };




           const response = await fetch(url, objectx)
            return response.json(); 
          }
          
          postData(content)
            .then(data => {
               refresh();
              });

          
        } catch (err) {
          console.log(`Error: ${err.message}`);
        }
      }



   
          return (
                
                   <section className='update'>
                            <form className='update--form' encType="multipart/form-data" onSubmit={handleSubmit}>
                                  <div className="inputs-wrap">
                                      <label htmlFor="postinput" className='text--input--label'> </label>       
                                            <textarea 
                                                className='textarea'
                                                name='post'
                                                placeholder="share"
                                                rows="3"
                                                id="postinput"
                                               //value={formData.post}
                                               //onChange={handleChange}
                                            />
                                              
                                        

                                        <label className='image--input--label'> <BiImageAdd />
                                              <input type="file" 
                                                  name="image" 
                                                  className='image--input' 
                                                 //value={formData.image} 
                                               // onChange={handleChange}
                                              />
                                        </label> 
                                  </div>   
                                    <button className='post--button' type='submit'> Post</button>               

                            </form>
                            
                                  <hr />

                    </section>
                
      )
    }
    
    
    



