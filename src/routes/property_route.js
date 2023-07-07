const router = require('express').Router();
const PropertyController = require('../controllers/property_controller');
const validateJWT = require('../middleware/validateJWT');

router.route('/getAllProperty')
    .get(validateJWT, PropertyController.findAll)

router.route('/createProperty')
    .post(validateJWT, PropertyController.create)

module.exports = router;