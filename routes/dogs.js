var express = require('express');
var router = express.Router();
const dogsCtrl = require('../controllers/dogs');

router.get('/', dogsCtrl.index);
router.get('/:idx',dogsCtrl.show);
module.exports = router;
