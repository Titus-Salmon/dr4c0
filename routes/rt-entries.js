var express = require('express');
var router = express.Router();
const entriesController = require('../controllers/Entries')


router.get('/', entriesController.getEntries)

module.exports = router;