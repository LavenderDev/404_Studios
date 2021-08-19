const express = require("express")
const app = express()
const port = 3000 || 3001
const cookies = require("cookies")
const middleware = require(`./modules/middleware`)
const authrouts = require(`./views/routes/auth-routes`)
const routes = require(`./views/routes/routes`)
const apis = require(`./views/API/api-routes`)

app.set('view engine', 'pug')
app.set('views', __dirname + "/views")
app.use(cookies.express('a','b','c'))
app.use(express.static(`${__dirname}/assets`));
app.use('/', middleware.updateUser, routes, authrouts)
app.use("/api", apis)
app.all("*", (req, res) => res.render('errors/404'))
app.listen(port, () => {
    console.log(`Server.js is online on port http://localhost:${port}`)
})