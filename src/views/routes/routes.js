const router = require('express').Router()


router.get("/", (req, res) => {
     res.render('pug/home', { user: res.locals.user })
})
router.get("/team", (req, res) => res.render("pug/team"))
router.get("/thank", (req, res) => res.render("pug/thank"))
router.get("/projects", (req, res) => res.render("pug/coming-soon"))


module.exports = router;
