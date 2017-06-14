var Event = require('../model/event');

module.exports=function (io){
  
io.on('connection', function (socket) {  
      Event.find({}, function(err, events) {
                    if (err) throw err;
                 socket.emit('update_event_res', { events: events });
        });
});
     

}