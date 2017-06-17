var express = require('express');
var event = require('../controller/event');
var router = express.Router();





router.get('/event', event.index);
router.post('/event/store', event.store);
router.get('/event/:id', event.show);
router.put('/event/update/:id', event.update);
router.delete('/event/:id', event.delete);
router.get('/*', function (req, res, next) {
    res.send("api is runing")
});
module.exports = router;