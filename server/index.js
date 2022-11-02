const express = require('express')
const morgan = require('morgan');

express()

    .use(morgan('tiny'))
    .use(express.json())

    .get("/hello", (req, res) => {
        res.status(200).json({status : 200, message : "HI!!"})
    })

    // this is our catch all endpoint.
    .get("*", (req, res) => {
        res.status(404).json({
        status: 404,
        message: "This is obviously not what you are looking for.",
        });
    })


    // Node spins up our server and sets it to listen on port 8000.
    .listen(8000, () => {console.log(`Server listening on port 8000`)})