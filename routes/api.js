var express = require('express');
var event = require('../controller/event');
var router = express.Router();

router.get('/event', event.index);
router.post('/event/store', event.store);
router.get('/event/update', event.update);
router.get('/event/delete', event.delete);

module.exports = router;