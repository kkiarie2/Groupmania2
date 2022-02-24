    import "../Styles/css/Newpost.css";
    import { React, useState} from 'react';
    import { Link } from 'react-router-dom';
    import {BiImageAdd} from "react-icons/bi"
    




    export default function newPost() {




      const handleSubmit = async (e) => {
        console.log(e.target)
        e.preventDefault();
        //const newPost = { id, datetime, body: postText };
        try {
      //    const response = await api.post('http://localhost:4000/api/posts/addpost', newPost);
      //    const allPosts = [...posts, response.data];
          
        } catch (err) {
          console.log(`Error: ${err.message}`);
        }
      }



   
          return (
                
                   <section className='update'>
                            <form className='update--form'  onSubmit={handleSubmit}>
                                  <div className="inputs-wrap">
                                      <label for="postinput" className='text--input--label'> </label>       
                                            <textarea 
                                                className='textarea'
                                                name='postText'
                                                placeholder="share"
                                                rows="3"
                                                id="postinput"
                                              // value={postText}
                                              //  onChange={(e) => setPostText(e.target.value)}
                                            />
                                              
                                        

                                        <label className='image--input--label'> <BiImageAdd />
                                              <input type="file" 
                                                  name="file" 
                                                  className='image--input' 
                                                // value={postImg} 
                                                //  onChange={(e) => setPostImg(e.target.value)}
                                              />
                                        </label> 
                                  </div>   
                                    <button className='post--button' type='submit'> Post</button>               

                            </form>
                            
                                  <hr />

                    </section>
                
      )
    }
    
    
    



