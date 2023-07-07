const router = require('express').Router();
const PaymentController = require('../controllers/payment_controller');
const validateJWT = require('../middleware/validateJWT');

router.route('/getAllPayment')
    .get(validateJWT, PaymentController.findAll)

router.route('/createPayment')
    .post(validateJWT, PaymentController.create)

module.exports = router;