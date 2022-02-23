    import "../Styles/css/Newpost.css";
    import { React, useState} from 'react';
    import { Link } from 'react-router-dom';
    




    export default function newPost() {
    /*   const [postText, setPostText] = useState('')
      const [postImg, setPostImg] = useState('')
     
      


                  const handleSubmit = async (e) => {
                          e.preventDefault();
                          const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
                          const datetime = format(new Date(), 'MMMM dd, yyyy pp');
                          const newPost = { id, datetime, text: postText, img: PostImg };
                                try {
                                  const response = await api.post('/posts', newPost);
                                  const allPosts = [...posts, response.data];
                                  setPosts(allPosts);
                                  setPostImg('');
                                  setPostText('');
                                  history.push('/home');
                                } catch (err) {
                                  console.log(`Error: ${err.message}`);
                          }
            }
      
      
      
      
      
      
      
      
      
      
      */



      return (
                
                   <article className='update'>
                            <form className='update--form'  //onSubmit={handleSubmit}
                            >
                                    <label className='text--input--label'> post Something       
                                        <textarea 
                                            className='textarea'
                                            name='postText'
                                           // value={postText}
                                            //onChange={(e) => setPostText(e.target.value)}
                                        ></textarea>
                                          
                                    </label>  

                                    
                                    <label className='image--input--label'>
                                          <input type="file" 
                                              name="file" 
                                              className='image--input' 
                                             // value={postImg} 
                                              //onChange={(e) => setPostImg(e.target.value)}
                                          />
                                            Image
                                    </label>                  

                            </form>
                            <button className='post--button' type='submit'> Post</button>


                    </article>
                
      )
    }
    
    
    



