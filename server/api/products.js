const router = require("express").Router()
const {
  models: { Product },
} = require("../db")

module.exports = router

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll({
      attributes: ["id", "name", "description", "price", "stock", "imageUrl"],
    })
    res.send(products)
  } catch (err) {
    next(err)
  }
})
