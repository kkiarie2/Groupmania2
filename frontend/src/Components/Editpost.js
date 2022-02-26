import {React, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

    
    
                
          
            
            
            
export default function Editpost() {


    


    function handleEdit(e){
        e.preventDefault();
        const editFormData = new FormData(e.target)
        const content = Object.fromEntries(editFormData.entries);
        
            
            
          



    }

                  return (
                        
                            <Link to="/#">
                               <article className='update'>
                                        <form className='update--form' onSubmit={handleEdit}>
                                                <label className='text--input--label'>        
                                                    <textarea 
                                                        className='textarea'
                                                        name='post'
                                                        ></textarea>
                                                      your post 
                                                </label>  
            
                                                
                                                <label className='image--input--label'>
                                                      <input type="file" 
                                                          name="image" 
                                                          className='image--input' 
                                                          
                                                     />
                                                        Add Image
                                                </label>                  
            
                                        </form>
                                        <button className='post--button' type='submit'> Post</button>
            
            
                                </article>
                            </Link>    
                         
                   
      )

      

    }
    
    
    


