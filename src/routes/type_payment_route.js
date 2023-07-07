const router = require('express').Router();
const TypePaymentController = require('../controllers/type_payment_controller');
const validateJWT = require('../middleware/validateJWT');

router.route('/getAllTypePayment')
    .get(validateJWT, TypePaymentController.findAll)

router.route('/createTypePayment')
    .post(validateJWT, TypePaymentController.create)

module.exports = router;