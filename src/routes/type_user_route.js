const router = require('express').Router();
const TypeUserController = require('../controllers/type_user_controller');

router.route('/getAllTypeUser')
    .get(TypeUserController.findAll)

router.route('/getTypeUserById/:typeUserId')
    .get(TypeUserController.findById)

router.route('/createTypeUser')
    .post(TypeUserController.create)

module.exports = router;