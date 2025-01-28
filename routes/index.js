var express = require('express');
var router = express.Router();

//const dayjs = require("dayjs");

const Trip = require("../models/trips");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get("/:date", (req, res) => {
//   const newDate = new Date(req.params.date)//dayjs(req.params.date).format("YYYY/MM/DD");
//   console.log(newDate);
  
//   Trip.find({ date : newDate})
//     .then(data => res.json({ trips : data}));
// })

module.exports = router;
