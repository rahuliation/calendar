var Event = require('../model/event');

var event_controller={};

event_controller.index=function(req, res, next) {

Event.find({}, function(err, events) {
  if (err) throw err;
  res.json(events);
});

}

event_controller.socket=function(req, res, next) {


req.app.io.on('connection', function (socket) {
    console.log("socket_connected");
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

}


event_controller.store=function(req, res, next) {
    
    var event_value= {
        title: req.body.title,
        details: req.body.details,
        date: req.body.date,
    };

    var event = new Event(event_value);
    
    event.save(function (err) {
    if (err) return console.log(err);
    console.log("success");

        });
}

event_controller.update=function(req, res, next) {
     res.send('Express REST update');
}

event_controller.delete=function(req, res, next) {
     res.send('Express REST delete');
}
module.exports= event_controller;