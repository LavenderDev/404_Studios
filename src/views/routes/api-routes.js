const express = require('express')
const router = express.Router()
const kissImgs = [
    "https://c.tenor.com/F02Ep3b2jJgAAAAS/cute-kawai.gif",
    "https://c.tenor.com/wDYWzpOTKgQAAAAM/anime-kiss.gif",
    "https://c.tenor.com/hK8IUmweJWAAAAAM/kiss-me-%D0%BB%D1%8E%D0%B1%D0%BB%D1%8E.gif",
    "https://c.tenor.com/_ttVgUDKJL0AAAAM/anime-couple.gif",
    "https://c.tenor.com/AtcFtesvEcEAAAAM/kissing-anime.gif",
    "https://c.tenor.com/7T1cuiOtJvQAAAAM/anime-kiss.gif",
    "https://c.tenor.com/0mdCwkmGD1oAAAAM/kiss-love.gif",
    "https://c.tenor.com/YTsHLAJdOT4AAAAM/anime-kiss.gif",
    "https://c.tenor.com/MtKkjQF4rz4AAAAC/kiss-anime.gif",
    "https://c.tenor.com/_6hgYIXDWpUAAAAM/kiss-anime.gif",
    "https://c.tenor.com/9vycr5sUYBMAAAAM/eden-of-the-east-anime.gif",
    "https://c.tenor.com/Yu2a1FmxFK8AAAAM/love-sweet.gif",
    "https://c.tenor.com/SqpFZQfcyEgAAAAM/anime-kiss.gif",
    "https://c.tenor.com/I8kWjuAtX-QAAAAM/anime-ano.gif",
    "https://c.tenor.com/v4Ur0OCvaXcAAAAM/koi-to-uso-kiss.gif",
    "https://c.tenor.com/lfKCNuFHfCsAAAAM/anime-kiss.gif",
    "https://c.tenor.com/dJU8aKmPKAgAAAAM/anime-kiss.gif",
    "https://c.tenor.com/Ze6FyEgy4WAAAAAM/kiss-anime.gif",
    "https://c.tenor.com/W571AcafidcAAAAM/anime-kissing.gif",
    "https://c.tenor.com/BjwmxFVGKm0AAAAM/toloveru-unexpected.gif",
    "https://c.tenor.com/3zdH2jC6qCcAAAAM/love-anime.gif",
    "https://c.tenor.com/CRoe6YqiMnoAAAAM/kiss-anime.gif",
    "https://c.tenor.com/Zwab7yjlNiEAAAAM/golden-time-anime.gif",
    "https://c.tenor.com/lA5I6yI1qogAAAAM/kuzu-no-honkai-kissing.gif",
    "https://c.tenor.com/h9A4bnxJys8AAAAM/cheek-kiss.gif",
    "https://c.tenor.com/ug8zygXFk3IAAAAM/kiss-anime-girl.gif",
    "https://c.tenor.com/5FOgNEcoaYMAAAAM/neck-kisses.gif",
    "https://c.tenor.com/0E_odieuKmwAAAAM/anime-zero.gif",
    "https://c.tenor.com/bkF2kFvXR50AAAAM/yes-love.gif",
    "https://c.tenor.com/O1-IX-P5ugQAAAAM/koi-to-uso-anime.gif",
    "https://c.tenor.com/q9bruJEDCBQAAAAM/forehead-kiss-sweet.gif",
    "https://c.tenor.com/h9_oVDXa1oQAAAAM/kiss-anime.gif",
    "https://c.tenor.com/G954PGQ7OX8AAAAM/cute-urara-shiraishi-anime.gif",
    "https://c.tenor.com/3k3ZQzxIh94AAAAM/kiss-kiss-in-a-cheek.gif",
    "https://c.tenor.com/e6cYiAPPCq4AAAAM/anime-kissing.gif",
    "https://c.tenor.com/hc2ZCXLcH5AAAAAM/hakuoki-hakuouki.gif",
    "https://c.tenor.com/fvwi_ml9cBIAAAAM/rascal-does-not-dream-of-bunny-girl-senpai-mai-sakurajima.gif",
    "https://c.tenor.com/cp9FdcuAWbcAAAAM/katanagatari-kiss.gif",
    "https://c.tenor.com/oUx3fN-VhT0AAAAM/happy-sugar-life-kiss-forehead.gif",
    "https://c.tenor.com/wqzTLrNoH3kAAAAM/kiss-anime.gif",
    "https://c.tenor.com/Cchd6VOMDIwAAAAM/forehead-forehead-kiss.gif",
    "https://c.tenor.com/jNLEPcLWvO8AAAAM/anime-nose.gif",  
]
const hugImgs = [
    "https://c.tenor.com/9e1aE_xBLCsAAAAS/anime-hug.gif",
    "https://c.tenor.com/2lr9uM5JmPQAAAAM/hug-anime-hug.gif",
    "https://c.tenor.com/xIuXbMtA38sAAAAM/toilet-bound-hanakokun.gif",
    "https://c.tenor.com/Ct4bdr2ZGeAAAAAM/teria-wang-kishuku-gakkou-no-juliet.gif",
    "https://c.tenor.com/0vl21YIsGvgAAAAM/hug-anime.gif",
    "https://c.tenor.com/ztEJgrjFe54AAAAM/hug-anime.gif",
    "https://c.tenor.com/0PIj7XctFr4AAAAM/a-whisker-away-hug.gif",
    "https://c.tenor.com/xgVPw2QK5n8AAAAM/sakura-quest-anime.gif",
    "https://c.tenor.com/JTqXUbfSSkYAAAAM/anime-bed.gif",
    "https://c.tenor.com/X5nBTYuoKpoAAAAM/anime-cheeks.gif",
    "https://c.tenor.com/SXk-WqF6PpQAAAAM/anime-hug.gif",
    "https://c.tenor.com/BbGzltHMpJgAAAAM/anime-hug-anime.gif",
    "https://c.tenor.com/G9yuomdknAsAAAAM/anime-couple.gif",
    "https://c.tenor.com/kPgR6UH6AXcAAAAM/anime-hug.gif",
    "https://c.tenor.com/ixaDEFhZJSsAAAAM/anime-choke.gif",
    "https://c.tenor.com/Pd2sMiVr09YAAAAM/hug-anime-hug.gif",
    "https://c.tenor.com/epQeAT-abYgAAAAM/%E0%B8%81%E0%B8%AD%E0%B8%94.gif",
    "https://c.tenor.com/mmQyXP3JvKwAAAAM/anime-cute.gif",
    "https://c.tenor.com/ItpTQW2UKPYAAAAM/cuddle-hug.gif",
    "https://c.tenor.com/nHkiUCkS04gAAAAM/anime-hug-hearts.gif",
    "https://c.tenor.com/lEMJMRtdX6YAAAAM/hug-cry.gif",
    "https://c.tenor.com/jDJlRRFUge4AAAAM/anime-cute.gif",
    "https://c.tenor.com/kP7ssdam30oAAAAM/love-hug.gif",
    "https://c.tenor.com/xhLBnoonMjMAAAAM/anime-hug.gif",
    "https://c.tenor.com/Q83w83J1VzUAAAAM/hug-love.gif",
    "https://c.tenor.com/nmzZIEFv8nkAAAAM/hug-anime.gif",
    "https://c.tenor.com/A0CFEc0WkIYAAAAM/hugging-snuggle.gif",
    "https://c.tenor.com/I3lwUAtmLI8AAAAM/hug-love.gif",
    "https://c.tenor.com/3JhgCdprym8AAAAM/kakegurui-yumeko-jabami.gif",
]

const randomJokes = [ // 25
    `What do you call a factory that makes okay products?`,
    `What did the janitor say when he jumped out of the closet?`,
    `What did the ocean say to the beach?`,
    `Why do seagulls fly over the ocean?`,
    `How does the moon cut his hair?`,
    `What did one wall say to the other?`,
    `What did the zero say to the eight?`,
    `Where do fruits go on vacation?`,
    `What did Baby Corn say to Mama Corn?`,
    `What's the best thing about Switzerland?`,
    `Where do you learn to make a banana split?`,
    `What has more letters than the alphabet?`,
    `Dad, did you get a haircut?`,
    `What do you call a poor Santa Claus?`,
    `Where do boats go when they're sick?`,
    `What did one hat say to the other?`,
    `Dad, can you put my shoes on?`,
    `What does a lemon say when it answers the phone?`,
    `What kind of car does an egg drive?`,
    `Dad, can you put the cat out?`,
    `How do you make 7 even?`,
    `How does a taco say grace?`,
    `Why didn't the skeleton climb the mountain?`,
    `What do you call it when a snowman throws a tantrum?`,
    `What does a bee use to brush its hair?`,
]

const jokeAsw = [ //24
    `A satisfactory.`,
    `Supplies!`,
    `Nothing, it just waved.`,
    `Because if they flew over the bay, we'd call them bagels.`,
    `Eclipse it.`,
    `I'll meet you at the corner.`,
    `That belt looks good on you.`,
    `Pear-is!`,
    `Where's Pop Corn?`,
    `I don't know, but the flag is a big plus.`,
    `Sundae school.`,
    `The post office!`,
    `No, I got them all cut!`,
    `St. Nickel-less.`,
    `To the boat doc.`,
    `Stay here! I'm going on ahead.`,
    `No, I don't think they'll fit me.`,
    `Yellow!`,
    `A yolkswagen.`,
    `I didn't know it was on fire.`,
    `Take away the s.`,
    `Lettuce pray.`,
    `It didn't have the guts.`,
    `A meltdown.`,
    `A honeycomb!`,
]

const facts = [
    `The scientific term for brain freeze is “sphenopalatine ganglioneuralgia”`,
    `Canadians say “sorry” so much that a law was passed in 2009 declaring that an apology can’t be used as evidence of admission to guilt`,
    `Back when dinosaurs existed, there used to be volcanoes that were erupting on the moon`,
    `The only letter that doesn’t appear on the periodic table is J`,
    `One habit of intelligent humans is being easily annoyed by people around them, but saying nothing in order to avoid a meaningless argument`,
    `If a Polar Bear and a Grizzly Bear mate, their offspring is called a “Pizzy Bear”`,
    `In 2006, a Coca-Cola employee offered to sell Coca-Cola secrets to Pepsi. Pepsi responded by notifying Coca-Cola`,
    `There were two AI chatbots created by Facebook to talk to each other, but they were shut down after they started communicating in a language they made for themselves`,
    `Nintendo trademarked the phrase “It’s on like Donkey Kong” in 2010`,
    `Daniel Radcliffe was allergic to his Harry Potter glasses`,
    `The famous line in Titanic from Leonardo DiCaprio, “I’m king of the world!” was improvised`,
    `A single strand of Spaghetti is called a “Spaghetto”`,
    `Hershey’s Kisses are named that after the kissing sound the deposited chocolate makes as it falls from the machine on the conveyor belt`,
    `Princess Peach didn’t move until 1988, designers believed it was too complicated to make her a movable character`,
    `To leave a party without telling anyone is called in English, a “French Exit”. In French, it’s called a “partir à l’anglaise”, to leave like the English`,
    `If you cut down a cactus in Arizona, you’ll be penalized up to 25 years in jail. It is similar to cutting down a protected tree species`,
    `The Buddha commonly depicted in statues and pictures is a different person entirely. The real Buddha was actually incredibly skinny because of self-deprivation`,
    `In Colorado, USA, there is still an active volcano. It last erupted about the same time as the pyramids were being built in Egypt`,
    `The first movie ever to put out a motion-picture soundtrack was Snow White and the Seven Dwarves`,
    `If you point your car keys to your head, it increases the remote’s signal range`,
    `Fruit stickers are edible, though the same as any fruit, washing prior to eating is recommended. The glue used for them is regulated by the FDA`,
    `The scientific name for Giant Anteater is Myrmecophaga Tridactyla. This means “ant eating with three fingers”`,
    `Astronaut is a compound word derived from the two Ancient Greek words “Astro” meaning “star” and “naut” meaning “sailor”. So astronaut literally means “star sailor”`,
    `The flashes of colored light you see when you rub your eyes are called “phosphenes”`,
    `At birth, a baby panda is smaller than a mouse`,
    `Iceland does not have a railway system`,
    `The largest known prime number has 17,425,170 digits. The new prime number is 2 multiplied by itself 57,885,161 times, minus 1`,
    `Forrest Fenn, an art dealer and author, hid a treasure chest in the Rocky Mountains worth over 1 million dollars. It still has not been found.`,
    `The lead singer of The Offspring started attending school to achieve a doctorate in molecular biology while still in the band. He graduated in May 2017`,
    `The world’s largest grand piano was built by a 15-year-old in New Zealand`,
    `The tongue is the only muscle in one’s body that is attached from one end`,
    `There is a company in Japan that has schools that teach you how to be funny. The first one opened in 1982. About 1,000 students take the course each year`,
    `The Lego Group is the world’s most powerful brand. There are more Lego Minifigures than there are people on Earth`,
    `The Bagheera kiplingi spider was discovered in the 1800s and is the only species of spider that has been classified as vegetarian`,
    `There is a boss in Metal Gear Solid 3 that can be defeated by not playing the game for a week; or by changing the date`,
    `The Roman – Persian wars are the longest in history, lasting over 680 years. They began in 54 BC and ended in 628 AD`,
    `Elvis was originally blonde. He started coloring his hair black for an edgier look. Sometimes, he would touch it up himself using shoe polish`,
    `If you translate “Jesus” from Hebrew to English, the correct translation is “Joshua”. The name “Jesus” comes from translating the name from Hebrew, to Greek, to Latin, to English`,
    `Ed Sheeran bought a ticket to LA with no contacts. He was spotted by Jamie Foxx, who offered him the use of his recording studio and a bed in his Hollywood home for six weeks`,
    `German Chocolate Cake is named after an American baker by the name of Samuel German`,
]



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