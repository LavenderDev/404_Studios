const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.json({deez: "Nuts"})
})


module.exports = router;