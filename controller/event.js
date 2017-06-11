var Event = require('../model/event');

var calander={};

calander.index=function(req, res, next) {
      res.send('Express REST index');
}

calander.store=function(req, res, next) {
    
    var event_value= {
        title: req.body.title,
        details: req.body.details,
        date: req.body.date,
    }


    var event = new Event(event_value);
    event.save(function (err) {
        if (err) return console.log(err);

        console.log("success");
        })

    
     res.send('Express REST store');
}

calander.update=function(req, res, next) {
     res.send('Express REST update');
}

calander.delete=function(req, res, next) {
     res.send('Express REST delete');
}
module.exports= calander;