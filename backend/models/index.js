const UserModel = require('./user')
const PostModel = require('./post')




async function  buildRelationships(){
UserModel.hasMany(PostModel, {foreignKey:'userId'})
//PostModel.belongsToMany()

}

async function setup(){
    await UserModel.sync({ force: false, alter: true})
    await PostModel.sync({ force: false, alter: true})
}
try{
    setup()
    buildRelationships()
}
catch(error){ console.log(error)}


module.exports ={UserModel, PostModel}