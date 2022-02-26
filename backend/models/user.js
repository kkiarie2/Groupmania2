const {DataTypes, Model} = require('sequelize');
const db = require('../db/db.js')
class UserModel extends Model{
  fullname(){
    if (this.firstname && this.lastname){
      return this.firstname + this.lastname
    } else if(this.firstname) {
        return this.firstname
    }else if(this.lastname){
        return(this.lastname)
    }else{
      return 'N/A'
    }
    
  }
}

const userSchema = ({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true, allowNull: false },
  firstname: { type: DataTypes.STRING, allowNull: true },
  lastname: { type: DataTypes.STRING, allowNull: true },
  password: { type: DataTypes.STRING, allowNull: false },
  image: { type: DataTypes.STRING, allowNull: true },
  email: { type: DataTypes.STRING, allowNull: false, unique: true, validate:{isEmail:true} },
  birthday: { type: DataTypes.DATE, allowNull: true },
  hobbies:{ type: DataTypes.STRING, allowNull: true},
});

UserModel.init(userSchema, {sequelize:db, modelName:'user'})

module.exports = UserModel