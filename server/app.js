const express = require("express")
const app = express()

app.use(express.json())
app.use("/api"), require("./api")
module.exports = app

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
