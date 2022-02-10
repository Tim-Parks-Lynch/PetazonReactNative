const { db } = require("./db")
const PORT = process.env.PORT || 8080
const app = require("./app")
const seed = require("../seed/seed")

const init = async () => {
  try {
    if (process.env.SEED === "true") {
      await seed()
    } else {
      await db.sync()
    }
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

init()
