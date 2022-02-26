const {PostModel, UserModel} = require('../models/index');



async function addPost({userId, post, image}){
  try{const result = await PostModel.create(
    {
      userId: userId,
      post: post || null,
      image: image || null
  })
      return {status:"successfully", ...result.dataValues}

  }

      catch(error){
        //console.log({error})
       switch(error.name)
              { default:
              return {status:'failed', message:'unexpected error occurred'} 
        }
      }
}
//edit posts
async function editPost(userId, postId, newPost){
  try{
      const existingPost = await PostModel.findOne({where: {userId, id:postId}})
      if(! existingPost ){
        return {status:'failed', message:'you are not allowed to edit this post'} 
      } else{
        
        const res = await existingPost.update(newPost)
        return {status:"successful", res}
      }

  } catch(err){
    //console.log({err})
    return {status:'failed', message:'unexpected error occurred'} 
  }

}


//get posts by user id
async function getPostsByUserId(userId, currentUserId){
  try{
    const res = await PostModel.findAll({where:{userId}, include:UserModel})
    //console.log({res})
    return {status: "Successful", posts:res.map((post)=>{
      const thisPost = ({...post.dataValues, ...post.getContent()})
      delete thisPost.image
      delete thisPost.post
      delete thisPost.user?.password
      //console.log({thisPost})
      const author = thisPost.user?.dataValues
      delete author?.password
      delete thisPost.user
      thisPost['author'] = author
      //console.log({author})
      if(thisPost.author.id === currentUserId) thisPost.isAuthor=true;
      return thisPost})}
    //console.log({res, userId})
   // return {status: "Successful", posts:res.map((post)=>({...post.dataValues, content: post.getContent()})) }
  }catch(err){
    return {status:'failed', message:'unexpected error occurred'} 
  }
}





//get single post
async function getPostByPostId(postId, currentUserId){
  try{
    const post = await PostModel.findOne({where:{id:postId}, include: UserModel})
    const thisPost = {...post?.dataValues, ...post?.getContent()}
      delete thisPost.image
      delete thisPost.post
      delete thisPost.user?.password
      //console.log({thisPost})
      const author = thisPost.user?.dataValues
      delete author?.password
      delete thisPost.user
      thisPost['author'] = author
      if(thisPost.author.id === currentUserId) thisPost.isAuthor=true;
      //console.log({author})
    return {status: "Successful", post:{...thisPost} }
  }catch(err){
    //console.log({err})
    return {status:'failed', message:'unexpected error occurred'} 
  }
}



//get allposts
async function getAllPosts(currentUserId){
  try{
    const res = await PostModel.findAll({include:UserModel})
    //console.log({res})
    return {status: "Successful", posts:res.map((post)=>{
      const thisPost = ({...post.dataValues, ...post.getContent()})
      delete thisPost.image
      delete thisPost.post
      delete thisPost.user?.password
      //console.log({thisPost})
      const author = thisPost.user?.dataValues
      delete author?.password
      delete thisPost.user
      thisPost['author'] = author
      //console.log({author})
      if(thisPost.author.id === currentUserId) thisPost.isAuthor=true;
      return thisPost
      
    })}
  }catch(err){

    return {status:'failed', message:'unexpected error occurred'} 
  }
} 



async function deletePost( postId, userId){
  try{
    if(!postId) return {status:'failed', message:'post does not exist'} 
    const existingPost = await PostModel.findOne({where:{id:postId, userId}})
    if(!existingPost){
      return {status:'failed', message:'Post does not exist'} 
    } else{
        const res = await existingPost.destroy()
        return { status: "successful", res}
    }

  } catch(err){
    ////console.log({err})
    return {status:'failed', message:'unexpected error occurred'}

  }
}




module.exports={addPost, getPostsByUserId, getAllPosts, editPost, getPostByPostId, deletePost}
