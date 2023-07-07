const router = require('express').Router();
const TypePropertyController = require('../controllers/type_property_controller');
const validateJWT = require('../middleware/validateJWT');

router.route('/getAllTypeProperty')
    .get(validateJWT, TypePropertyController.findAll)

router.route('/createTypeProperty')
    .post(validateJWT, TypePropertyController.create)

module.exports = router;