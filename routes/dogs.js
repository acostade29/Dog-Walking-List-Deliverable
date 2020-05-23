var express = require('express');
var router = express.Router();
const dogsCtrl = require('../controllers/dogs')

router.get('/', dogsCtrl.index);
router.get('/new', dogsCtrl.addPage);
router.get('/:idx', dogsCtrl.show);
router.post('/add', dogsCtrl.create);
router.delete('/:idx', dogsCtrl.delete);
router.get('/edit/:idx', dogsCtrl.editPage);
router.put('/edit/:idx', dogsCtrl.update);

module.exports = router;