/*
const { Sequelize, DataTypes } = require('sequelize');
const sequelize =  require('./dbConfig');
*/

module.exports = (sequelize,DataTypes)=>{
    const User = sequelize.define('User', {
        // Model attributes are defined here
        userEmail: {
          type: DataTypes.STRING,
          allowNull: false
        },
        userPassword: {
          type: DataTypes.STRING,
          allowNull:false
        }
      }, {
        // Other model options go here
        tableName:'users',
        timeStamp:false,
        createdAt:false,
        updatedAt:true
      });
      
      // `sequelize.define` also returns the model
      console.log(User === sequelize.models.User); // true

      return User;
}

//module.exports =  User;