const fetch = require("node-fetch")

    
    fetch(`http://localhost:8000/api/joke`)
    .then(res => res.json())
    .then(json => console.log(json))