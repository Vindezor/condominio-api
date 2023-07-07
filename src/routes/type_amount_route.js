const router = require('express').Router();
const TypeAmountController = require('../controllers/type_amount_controller');
const validateJWT = require('../middleware/validateJWT');

router.route('/getAllTypeAmount')
    .get(validateJWT, TypeAmountController.findAll)

router.route('/createTypeAmount')
    .post(validateJWT, TypeAmountController.create)

module.exports = router;