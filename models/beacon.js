const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const beaconSchema = new Schema({
      cust_id: String,
      beacon_name: String,
      value: Number
    },{
      timestamps: true
    });

const Beacon = mongoose.model('Beacon', beaconSchema);

module.exports = Beacon
