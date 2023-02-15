// DELETE THIS LINE


// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
const db = require("../database-mysql");
// const Item = require('../database-mongo/Item.model.js');

// UNCOMMENT IF USING MYSQL WITH CALLBACKS
// const selectAll = function (req, res) {
//   db.query("SELECT * FROM items", (err, items, fields) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(items);
//     }
//   });
// };

// UNCOMMENT IF USING MONGOOSE WITH PROMISES
// const selectAll = function (req, res) {
//   Item.find({})
//     .then((items) => {
//       res.status(200).send(items);
//     })
//     .catch((error) => {
//       res.status(500).send(error);
//     });
// };

// UNCOMMENT IF USING MONGOOSE WITH PROMISES & ASYNC AWAIT
// const selectAll = async function (req, res) {
//   try {
//     const items = await Item.find({});
//     res.status(200).send(items);
//   } catch (error) {
//     res.status(200).send(error);
//   }
// };



const getOne=(req,res)=>{
    let sql=`SELECT * from user WHERE username=${req.body.username}`
    try{
        let result=db.query(sql)
        if(req.body.password===result.password){
            res.status(200).send(result)
        }
        else{
            res.send("Wrong Password")
        }
    } catch(err){
        res.status(500).send(err)
    }
}
const createAccount=(req,res)=>{
    const sql = 'INSERT INTO user SET ?'
    // let sql=`INSERT into user userName=${req.body.username} firstName=${req.body.firstName} lastName=${req.body.lastName} password=${req.body.password} profil-photo=${req.body.profilphoto}  `
    db.query(sql, {...req.body}, (err, items, fields) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(200).send(items);
        }
      });
}

// const createChefAccount=(req,res)=>{
//   const sql="INSERT INTO user (firstName,lastName,password,role,userName)VALUES ('haifa', 'gharrad', 'azerty123', 'chef', 'haifagharrad')"
//   db.query(sql, (err, items, fields) => {
//       if (err) {
//         res.status(500).send(err);
//       } else {
//         res.status(200).send(items);
//       }
//     });
// }
const selectAllUsers = function (req, res) {
    db.query("SELECT * FROM user ", (err, items, fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(items);
      }
    });
  };
module.exports = {createAccount,getOne,selectAllUsers};
