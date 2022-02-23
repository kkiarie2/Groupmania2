    import "../Styles/css/Newpost.css";
    import { React, useState} from 'react';
    import { Link } from 'react-router-dom';
    




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
                
                   <article className='update'>
                            <form className='update--form'  onSubmit={handleSubmit}
                            >
                                    <label className='text--input--label'> post Something       
                                        <textarea 
                                            className='textarea'
                                            name='postText'
                                           // value={postText}
                                          //  onChange={(e) => setPostText(e.target.value)}
                                        ></textarea>
                                          
                                    </label>  

                                    <label className='image--input--label'>
                                          <input type="file" 
                                              name="file" 
                                              className='image--input' 
                                             // value={postImg} 
                                            //  onChange={(e) => setPostImg(e.target.value)}
                                          />
                                            Image
                                    </label>                  

                            </form>
                            <button className='post--button' type='submit'> Post</button>


                    </article>
                
      )
    }
    
    
    



