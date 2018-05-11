const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Beacon = require('./models/beacon');

//app.use('/api', router);
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//app.get('/', function(req, res){
//  res.json({ message: 'You did it!  You are the Man!'});
//});

app.listen(3000);
console.log('Starting App - Treb the Man!');

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/harbor');

app.use(function(req, res, next){
  console.log('we use the router, and the next moves to the next requests');
  next();
})


app.get('/api/beacons', function (req, res){
  console.log('get beacons');
  Beacon.find({}).then(eachOne =>{

    res.json(eachOne);
  })
})

app.post('/api/beacons', function(req, res){

  Beacon.create({
    cust_id: req.body.cust_id,
    beacon_name: req.body.beacon_name,
    value: req.body.value
  }).then(beacon =>{
    res.json(beacon)
  });
});

app.get('apie/beacons/:beacon_id', function (req res){
  Beacon.finByID(req.params.beacon_id).then(fucntion(err, beacon){
    if (err){
      res.send(err)
    }
    res.json(beacon)
  })
})
