var db =  require('../models/dbConfig');
var User =  db.user;

const addUser = async(req,res)=>{
    const jane = await User.create({ userEmail: "raj@gmail.com",userPassword:"1235"});
    console.log(jane instanceof User); // true  
    console.log(jane.userEmail+" "+jane.userPassword); // "Jane"
    console.log("Jane saaved");
    console.log(jane.toJSON());
    res.status(200).json(jane.toJSON());
}

const getAllUsers = async(req,res)=>{
    const data =  await User.findAll({})
    res.status(200).json({data:data});
}


const getOneUser = async(req,res)=>{
    const data =  await User.findOne({
        where:{
            id:req.params.id
        }
    })
    res.status(200).json({data:data});
}

const addNewUser = async(req,res)=>{
    let postData =  req.body;
    console.log(postData);
    let data = {};
    if(postData.length>1){
        data =  await User.bulkCreate(postData);
    }
    else{
         data =  await User.create(postData);
    }
    res.status(200).json({data:data});
}

const removeUser = async(req,res)=>{
    const data =  await User.destroy({
        where:{
            id:req.params.id
        }
    })
    res.status(200).json({data:data});
}

module.exports = {
    addUser,
    getAllUsers,
    getOneUser,
    addNewUser,
    removeUser
}