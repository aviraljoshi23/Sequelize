const {Sequelize,DataTypes } = require('sequelize');

const sequelize = new Sequelize("project_db","root","rootpassword",{
    host:"localhost",
    logging:false,
    dialect:'mysql',
    //pool:{max:5,min:0,idle:10000}
});

try {
    sequelize.authenticate();
    console.log(`Conntection  Done`);
} catch (error) {
    console.log(`No connection made`);
}

const db =  {};
db.Sequelize =  Sequelize;
db.sequelize =  sequelize;
db.contact =  require('./contact')(sequelize,DataTypes);
db.user =  require('./user')(sequelize,DataTypes);
sequelize.sync({force:false});


module.exports =  db;