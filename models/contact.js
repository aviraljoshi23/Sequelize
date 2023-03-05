/*const { Sequelize, DataTypes } = require('sequelize');
const sequelize =  require('./dbConfig');
*/


module.exports = (sequelize,DataTypes)=> {
    const Contact = sequelize.define('contacts', {
        // Model attributes are defined here
        phoneNumber: {
          type: DataTypes.STRING,
          allowNull: false
        },
        addressDetail: {
          type: DataTypes.STRING,
        }
      }, {
        // Other model options go here
        tableName:'contacts',
        timeStamp:false,
        createdAt:false,
        updatedAt:true
      });
      
      // `sequelize.define` also returns the model
      console.log(Contact === sequelize.models.Contact); // true

      return  Contact;
}

//module.exports =  Contact;