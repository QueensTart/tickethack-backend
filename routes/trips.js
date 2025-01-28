var express = require("express");
var router = express.Router();
const dayjs = require("dayjs");

const Trip = require("../models/trips");

// router.get("/", (req, res) => {
//     Trip.find()
//         .then(data => res.json({ trips : data}));
// })

router.get("/", (req, res) => {
    Trip.find({departure : req.body.departure, arrival : req.body.arrival, date : req.body.date})  
    .then(data => res.json({ trip : data }));
})

router.get("/:date", (req, res) => {
    const newDate = new Date(req.params.date);
    const tripList = [];

    Trip.find({})
       .then((data) => { 
        for(let i = 0; i < 10; i++)
        {
            if(data[i].date.getDate() === newDate.getDate() && data[i].date.getMonth() === newDate.getMonth())
            {
                tripList.push(data[i]);
            }
        }
        res.json({ trips : tripList})
       })   
})


module.exports = router;


    