const UserModel = require('./user')
const { PostModel, CommentModel, LikeModel } = require('./post')





async function  buildRelationships(){
UserModel.hasMany(PostModel, {foreignKey:'userId'})
PostModel.hasMany(LikeModel, {foreigKeny:'postId'})
PostModel.hasMany(CommentModel, {foreignKey:'postId'})
UserModel.hasMany(LikeModel, {foreignKey:'userId'})
UserModel.hasMany(CommentModel, {foreignKey:'userId'})
//PostModel.belongsToMany()

}

async function setup(){
    await UserModel.sync({ force: false, alter: true})
    await PostModel.sync({ force: false, alter: true})
    await LikeModel.sync({force: false, alter: true})
    await CommentModel.sync({force: false, alter: true})
}
try{
    setup()
    buildRelationships()
}
catch(error){ console.log(error)}


module.exports ={UserModel, PostModel, LikeModel, CommentModel}