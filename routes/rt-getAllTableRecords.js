var express = require('express');
var router = express.Router();
const tableController = require('../controllers/tableController')


router.get('/', tableController.getAllTableRecords)

module.exports = router;