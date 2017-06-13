var express = require('express');
var event = require('../controller/event');
var router = express.Router();





router.get('/event', event.index);
router.post('/event/store', event.store);
router.get('/event/update', event.update);
router.get('/event/delete', event.delete);
router.get('/event/socket', event.socket);
router.get('/*', function (req, res, next) {
    res.send("api is runing")
});
module.exports = router;