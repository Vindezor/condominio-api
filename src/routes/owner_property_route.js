const router = require('express').Router();
const OwnerPropertyController = require('../controllers/owner_property_controller');
const validateJWT = require('../middleware/validateJWT');

router.route('/getAllOwnerProperty')
    .get(validateJWT, OwnerPropertyController.findAll)

router.route('/createOwnerProperty')
    .post(validateJWT, OwnerPropertyController.create)

module.exports = router;