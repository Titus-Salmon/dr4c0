var express = require('express');
var router = express.Router();
const tableController = require('../controllers/tableController')

router.get('/', (req, res, next) => {
  res.render('vw-addTableRecord', {
    title: `vw-addTableRecord`,
  })
})
router.post('/addTableRecord', tableController.addTableRecord)

module.exports = router;