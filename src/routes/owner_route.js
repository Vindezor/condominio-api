const router = require('express').Router();
const OwnerController = require('../controllers/owner_controller');
const validateJWT = require('../middleware/validateJWT');

router.route('/getAllOwner')
    .get(validateJWT, OwnerController.findAll)

router.route('/createOwner')
    .post(validateJWT, OwnerController.create)

module.exports = router;