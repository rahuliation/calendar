var Event = require('../model/event');

var event_controller={};

event_controller.index=function(req, res, next) {

Event.find({}, function(err, events) {
  if (err) throw err;
  res.json(events);
});

 
}

event_controller.socket=function(req, res, next) {



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
    if (err) return console.log(err);
          Event.find({}, function(err, events) {
                    if (err) throw err;
                 req.io.emit('update_event_res', { events: events });
             });
    });
    res.json({status:"success"});
}

event_controller.update=function(req, res, next) {
     res.send('Express REST update');
}

event_controller.delete=function(req, res, next) {
     res.send('Express REST delete');
}
module.exports= event_controller;