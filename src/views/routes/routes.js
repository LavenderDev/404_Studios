const router = require('express').Router()
router.get("/", (req, res) => {
     res.render('pug/home', )
})
router.get("/team", (req, res) => res.render("pug/team"))
router.get("/thank", (req, res) => res.render("pug/thank"))
router.get("/projects", (req, res) => res.render("pug/projects"))


module.exports = router;
