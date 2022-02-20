const {DataTypes, Model} = require('sequelize');
const db = require('../db/db.js')
class PostModel extends Model{
getContent(){
  if(this.post && this.image){
    return {type: 'article', content: [this.post, this.image]}
  }
  else if (this.post){
    return{type:'post', content: [this.post]}
  } else if(this.image){
      return{type:'image', content:[this.image]}
  } else{
    return null
  }
}

  }


const postSchema = ({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true, allowNull: false },
  post: { type: DataTypes.STRING, allowNull: true },
  image: { type: DataTypes.STRING, allowNull: true },
  likes: { type: DataTypes.JSON, allowNull: true },
  comments:{type: DataTypes.JSON, allowNull:true }
});

PostModel.init(postSchema, {sequelize:db, modelName:'post'})

module.exports = PostModel