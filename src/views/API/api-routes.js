const express = require('express')
const router = express.Router()
const kissImgs = require(`./kissImages`)
const hugImgs = require(`./hugImages`)
const randomJokes = require(`./randomJokes`)
const jokeAsw = require(`./randomJokeAnwsers`)
const facts = require(`./facts`)


function getImg(img) {
    rIndex = Math.floor(Math.random() * img.length)
    resKissImg = img[rIndex]
    return resKissImg
}

function getJoke(res) {
    rIndex = Math.floor(Math.random() * randomJokes.length)
    result = randomJokes[rIndex]
    resAas = jokeAsw[rIndex]
    return {
        joke: result,
        answer: resAas,
        status: `${res.statusCode}`
    }
}

function getFact() {
    let rIndex = Math.floor(Math.random() * facts.length)
    let result = facts[rIndex]
    return result;
}

router.get("/kiss", (req, res) => {

    res.json(
        {
            image: `${getImg(kissImgs)}`,
            status: `${res.statusCode}`
        }
    )
})

router.get("/hug", (req, res) =>{
    res.json(
        {
            image: `${getImg(hugImgs)}`,
            status: `${res.statusCode}`
        }
    )
})


router.get(`/joke`, (req, res) => {
    res.json(getJoke(res))
})

router.get(`/fact`, (req, res) => {
    res.json(
        {
            fact: `${getFact()}`,
            status: `${res.statusCode}`
        }
    )
})





router.get(`/`, (req, res) => {
    res.json(
        {
            "End Points!": `/api/joke\n/api/kiss\n/api/hug`
        }
    )
})












module.exports = router;