import Post from './Post'
import {useState, useEffect} from 'react'
import { useParams, Redirect, useHistory } from 'react-router-dom'
import { checkSession, fetchPost } from '../api';

export default function Singlepost(){
const [post, setPost] = useState()
const {postId} = useParams();
const history = useHistory()

useEffect(async() => {
    const postPage = await fetchPost(checkSession(), postId)
    console.log(postPage)
    if(postPage) {
        setPost(postPage)
    }else{
        history.push("/home")
    }

  
   
    }, [])

if(checkSession()){


return (<>{post && <Post story={post.content} typeOfStory={post.type} authorinfo={post.author}  isAuthor={post.isAuthor || false} />}    </>)

} else{
        return <Redirect from="/post" to="/login" />
     }
}





