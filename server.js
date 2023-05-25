const express = require("express")

const { db, Member, Facility, Booking,} = require("./db/model.js")

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//If I'm splitting things up and using routers, such as one for bookmarks and one for categories
//I would import them at the top of this file, and then use them here
//server.use("/bookmarks", bookmarkRouter)

app.get('/api/facilities', async (req, res, next) => {
    try {
      res.send(await Facility.findAll({
        include: [Booking]
    }),)
    } catch (error) {
      error.message = "database query failed on GET /api/facilities route"
      next(error)
    }
})

app.get('/api/members', async (req, res, next) => {
    try {
      res.send(await Member.findAll({
        include: [
            {model: Member, as: 'sponser'},
            {model: Member, as: 'sponsee'}
        ]
    }),)
    } catch (error) {
      error.message = "database query failed on GET /api/members route"
      next(error)
    }
})

const PORT = 1337

app.use((err, req, res, next) => {
  console.log(err)
  res.status(err.status || 500).send(err.message)
})

app.listen(PORT, () => {
  console.log(`app listening in port ${PORT}`)
})