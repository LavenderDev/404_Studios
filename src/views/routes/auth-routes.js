const router = require(`express`).Router()
const authClient = require(`../../modules/client`)
require("dotenv").config()


router.get("/login", (req, res) => res.redirect(`${process.env.authURL}`))

router.get("/auth", async (req, res) => {
     try {
          const code = req.query.code
          const key = await authClient.getAccess(code)
          res.cookies.set('key', key)
          res.redirect(`/thank`)
     } catch(err) {
          res.render("errors/401")
          console.log(err)
     }   
})


router.get("/logout", (req, res) => {
     res.cookies.set('key', '')
})

module.exports = router;
