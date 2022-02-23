const {PostModel} = require('../models/index');


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
        console.log({error})
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
    console.log({err})
    return {status:'failed', message:'unexpected error occurred'} 
  }

}


//get posts by user id
async function getPostsByUserId(userId){
  try{
    const res = await PostModel.findAll({where:{userId}})
    console.log({res, userId})
    return {status: "Successful", posts:res.map((post)=>({...post.dataValues, content: post.getContent()})) }
  }catch(err){
    return {status:'failed', message:'unexpected error occurred'} 
  }
}

//get allposts
async function getAllPosts(){
  try{
    const res = await PostModel.findAll({})
    console.log({res})
    return {status: "Successful", posts:res.map((post)=>{
      const thisPost = ({...post.dataValues, ...post.getContent()})
      delete thisPost.image
      delete thisPost.post
      return thisPost
    })}
  }catch(err){
    return {status:'failed', message:'unexpected error occurred'} 
  }
}




module.exports={addPost, getPostsByUserId, getAllPosts, editPost}


/*



exports.addPost = (req, res, next) => {

    req.body.post = JSON.parse(req.body.post);
    console.log(req.body.post)
    const url = req.protocol + '://' + req.get('host');
   const post = new Post({
      
    
      
      description: req.body.post.description,
      imageUrl: url + '/images/' + req.file.filename,
      likes: 0,
      usersLiked: []
  });
    post.save().then(
      () => {
        res.status(201).json({
          message: 'Post saved successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

exports.getOnePost = (req, res, next) => {
  Post.findOne({
    _id: req.params.id
  }).then(
    (post) => {
      res.status(200).json(post);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
  
};

exports.modifyPost = (req, res, next) => {
    let post = new Post({ _id: req.params._id });
    if (req.file) {
      const url = req.protocol + '://' + req.get('host');
      req.body.post = JSON.parse(req.body.post);
      post = {
        _id: req.params.id,
        userId: req.body.userId,
        description: req.body.post.description,
        imageUrl: url + '/images/' + req.file.filename,
        
      

      };
    } else {
      post = {
        _id: req.params.id,
        userId: req.body.userId,
        description: req.body.description,
        imageUrl: req.body.imageUrl
        
      };
    }
    Post.updateOne({_id: req.params.id}, post).then(
      () => {
        res.status(201).json({
          message: ' updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

  exports.deletePost = (req, res, next) => {
    Post.findOne({_id: req.params.id}).then(
      (post) => {
        const filename = post.imageUrl.split('/images/')[1];
        var imagePath = `${process.cwd()}/images/${filename}`;
             fs.unlink(imagePath, () => {
          Post.deleteOne({_id: req.params.id}).then(
            () => {
              res.status(200).json({
                message: 'Deleted!'
              });
            }
          ).catch(
            (error) => {
              res.status(400).json({
                error: error
              });
            }
          );
        });
      }
    );
  };

exports.getAllPost = (req, res, next) => {
  Post.find().then(
    (post) => {
      res.status(200).json(post);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};


exports.likePost = (req, res, next) => {
  //  likes the post
   Post.findOne({_id: req.params.id}).then((post) => {
         if (req.body.like == 1) {
          post.usersLiked.push(req.body.userId)
          post.likes += req.body.like
         
         }
    
//  is canceling their like or dislike
         else if (req.body.like == 0) {
           if (post.usersLiked.includes(req.body.userId)) {
            post.usersLiked = post.usersLiked.filter(like => like != req.body.userId);
            post.likes -= 1
         //console.log(post.usersLiked)
         
           }
           
         }
     
        
         post.save().then(
          () => {
            res.status(201).json({
              message: 'Post saved successfully!'
            });
          }
        ).catch(
          (error) => {
            res.status(400).json({
              error: error
            });
          });

        })
      }  
      
        
*/



