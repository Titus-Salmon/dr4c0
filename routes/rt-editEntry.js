var express = require('express');
var router = express.Router();
const entriesController = require('../controllers/Entries')

router.get('/', (req, res, next) => {
  res.render('vw-editEntry', { //render searchResults to vw-MySqlTableHub page
    title: `vw-editEntry`,
  })
})
router.post('/graphql', entriesController.addEntries)

module.exports = router;