var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  title:  String,
  details:   String,
  date: { type: Date, default: Date.now }

});

module.exports=mongoose.model('events', eventSchema);