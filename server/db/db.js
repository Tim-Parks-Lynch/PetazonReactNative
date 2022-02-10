// const express = require("express")
// const app = express()
const Sequelize = require("sequelize")
const db = new Sequelize("postgres://localhost:5432/PetazonReactNative")

module.exports = db

// app.use(express.json())

// const connection = async () => {
//   try {
//     await db.authenticate()
//     console.log("Connection has been established successfully.")
//     app.listen(3210, () => {
//       console.log("Server @port 3210")
//     })
//   } catch (error) {
//     console.error("Unable to connect to the database:", error)
//   }
// }

// connection()

// const Product = sequelize.define("product", {
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     validator: {
//       notEmpty: true,
//     },
//   },
//   description: {
//     type: Sequelize.TEXT,
//     allowNull: false,
//     validator: {
//       notEmpty: true,
//     },
//   },
//   price: {
//     type: Sequelize.INTEGER,
//     allowNull: false,
//   },
//   stock: {
//     type: Sequelize.INTEGER,
//     allowNull: false,
//   },
//   imageUrl: {
//     type: Sequelize.STRING,
//     defaultValue:
//       "https://m.media-amazon.com/images/I/71cnPzmu7WL._AC_SL1500_.jpg",
//   },
// })

// Product.sync({force: false}).then(() => {
//     console.log('Product Table Syncing')
//   });

// app.get('/data', function(req,res){
//   Product.findAll().then(data => {
//     console.log(data);
//     res.send(data);
//   })
// })

// app.post('/data', function(req,res){
// Product.create({
//     nama: req.body.nama,
//     usia: req.body.usia
// }).then(data => {
//   console.log('Data masuk!');
//   res.send({
// 		status: 'Data sukses diinput!',
// 		nama: req.body.nama,
// 		usia: req.body.usia
//   })
// });
// })
