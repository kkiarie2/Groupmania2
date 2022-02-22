import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillLike, AiOutlineComment, AiOutlineLogout } from 'react-icons/ai';



 const Post = ({}) => {
  
  
    return (
               <> 
               <Link to="#">   
             <div className='post--div'>
                    <div className='publisher-div'>
                            <img src='picture.png' /* src="/#" */   className='publisher--image'/>
                    </div>
                    <div className='post-text-div'>
                            <div>
                                
                                
                                <p> 
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 
                                    1500s, 
                                    {/*  
                                    
                                        {{(post.text).length <= 25? post.text : `${(post.text).slice(0, 25)}...`}
                                    
                                    
                                    
                                    */}
                                
                                </p>
                    
                                        
                            
                            </div> 
                
                            <div className='icons--div'>
                                
                                    <div className='icons--likes icons'>
                                        <AiFillLike/>
                                    
                                        <div className='icons--usersliked numbers'>50</div>
                                    </div> 
                                    
                                    <div className='icons--comment icons'>
                                        <AiOutlineComment />
                                        <div className='icons--comments--count numbers'>50</div>
                                    </div>
                                    <div className='edit--div '>
                                        <Link to="/editpost">
                                            <button className='button--edit edit--post' type='button'
                                            >Edit post</button>
                                        </Link>    
                                    </div>
                                    <div className='delete--div '>
                                        <button className='button-delete delete--post' >Delete Post</button>

                                      { /* onClick={handleDelete} */}
                                    </div>
                                    
                                
                            </div>
                    
                    </div>
                
                
                    
                </div>

                </Link> 

                </>
  )
}




export default Post







 