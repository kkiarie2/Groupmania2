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







export {apiRoute, imageRoute, checkSession};





