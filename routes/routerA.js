const router = require("express").Router()
const { Member, Facility } = require("../db/model")

// router.get("/api/facilities", async (req, res, next) => {
//   try {
//     const [facility] = await Promise.all([     
//       Facility.findAll(),
//     ])

//     res.json([facility])
//   } catch (error) {
//     error.message = "database query failed on GET /api/facilities route"
//     next(error)
//   }
// })

// router.get("/api/bookings", async (req, res, next) => {
//   try {
//     const [booking] = await Promise.all([     
//         Booking.findAll(),
//       ])
  
//       res.json([booking])
//   } catch (error) {
//     error.message = "database query failed on GET /api/bookings"
//     next(error)
//   }
// })

// router.get("/api/members", async (req, res, next) => {
//   try {
//     const [member] = await Promise.all([     
//         Member.findAll(),
//       ])
  
//       res.json([member])
//   } catch (error) {
//     error.message = "database query failed on GET /api/members"
//     next(error)
//   }
// })

module.exports = router