var Event = require('../model/event');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var event_controller={};

event_controller.index=function(req, res, next) {

Event.find({}, function(err, events) {
  if (err) throw err;
  res.json(events);
});

 
}

event_controller.socket=function(req, res, next) {



}

event_controller.show=function(req, res, next) {
    
    var id=req.params.id;
   Event.findById(id, function(err, event) {
        if (err) throw err;
         res.json(event);
        });

}





event_controller.store=function(req, res, next) {

    var event_value= {
        title: req.body.title,
        details: req.body.details,
        date: req.body.date
    };
    console.log(event_value);

    var event = new Event(event_value);
    
    
    event.save(function (err) {
    if (err) return  res.status(500).send({ error: "boo:(" });
    req.io.emit('make update', {});
    res.json(event);
    });

}

event_controller.update=function(req, res, next) {

    var id=req.params.id;
    Event.findById(id, function (err, event){
        if (err) return  res.status(500).send({ error: err });
        event.title = req.body.title;
        event.details=req.body.details;
        event.date=req.body.date
        event.save();
    req.io.emit('make update', { });
    res.json(event);
});

}

event_controller.delete=function(req, res, next) {
     res.send('Express REST delete');
}
module.exports= event_controller;