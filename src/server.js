const express = require("express")
const app = express()
const routes = require(`./views/routes/routes`)
const apis = require(`./views/routes/api-routes`)
const port = 8000 || 3001

app.set('view engine', 'pug')
app.set('views', __dirname + "/views")
app.use(express.static(`${__dirname}/assets`));
app.locals.basedir = `${__dirname}/assets`;

app.use('/', routes)
app.use("/api", apis)

app.all("*", (req, res) => {
    res.render('404')
})

app.listen(port, () => {
    console.log(`Server.js is online on port http://localhost:${port}`)
})