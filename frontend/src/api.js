var apiRoute = 'http://localhost:4000/api';
var imageRoute = 'http://localhost:4000/images';


const checkSession=() => { 
    var token = null
  var allCookies = document.cookie.split(";")
  allCookies.map((cookie)=>{
    var c = cookie.split("=");
    //console.log(c)
    if(c[0] === 'token'){
      token = (c[1])
    }
})
return token
}






const fetchProfile = async (token) => {
  // console.log(token)
   try {
     const response = await fetch(apiRoute + '/auth/myprofile', {
       method: "GET", 
       headers:{
       'Accept': '*/*',
       'Authorization': `Bearer ${token}`, 
       }
     });
     const data = await response.json()
     return(data.user)
     //console.log(data.user)
     
   } catch (err) {
                  console.log(err); 
          return (false)
   }
 }

 const fetchPost = async (token, postId) => {
  // console.log(token)
   try {
     const response = await fetch(apiRoute + '/posts/' + postId, {
       method: "GET", 
       headers:{
       'Accept': '*/*',
       'Authorization': `Bearer ${token}`, 
       }
     });
     const data = await response.json()
          if(data?.post.id){
            return data.post
          }else{
            return false
          }
    
     //console.log(data.user)
     
   } catch (err) {
                  console.log(err); 
          return (false)
   }
 }







export {apiRoute, imageRoute, checkSession, fetchProfile, fetchPost};





