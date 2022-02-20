const {DataTypes, Model} = require('sequelize');
const db = require('../db/db.js')
class UserModel extends Model{

}

const userSchema = ({
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true, allowNull: false },
  firstname: { type: DataTypes.STRING, allowNull: true },
  password: { type: DataTypes.STRING, allowNull: false },
  image: { type: DataTypes.STRING, allowNull: true },
  email: { type: DataTypes.STRING, allowNull: false, unique: true, validate:{isEmail:true} }
});

UserModel.init(userSchema, {sequelize:db, modelName:'user'})

module.exports = UserModel