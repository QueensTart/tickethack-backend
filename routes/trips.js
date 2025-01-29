var express = require("express");
var router = express.Router();

const Trip = require("../models/trips");

// router.get("/", (req, res) => {
//     Trip.find()
//         .then(data => res.json({ trips : data}));
// })

router.get("/:departure/:arrival/:date", (req, res) => {
    const newDate = new Date(req.params.date);
    const tripList = [];
    
    Trip.find({departure : req.params.departure, arrival : req.params.arrival})
    .then((data) => { 
        if(data != [])
        {
            for(let i = 0; i < data.length; i++)
            {
                if(data[i].date.getDate() === newDate.getDate() && data[i].date.getMonth() === newDate.getMonth())
                {
                    tripList.push(data[i]);
                }
            }
            res.json({ trips : tripList})
        }
        else{
            res.json({ trips : []});
        }
        
       })
    //.then(data => res.json({ trip : data }));
})


module.exports = router;


    