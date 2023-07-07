const paymentController ={};
const {Payment, TypePayment, TypeAmount} = require('../db/sequelize');
const response = require('../utils/global_response');

function findOne(id) {
    return Payment.findOne({
        where: {
            id
        }
    });
}

paymentController.findAll = (req, res, next) => {
    Payment.findAll({ include: [TypePayment, TypeAmount], attributes: { exclude: ['id_type_payment', 'id_type_amount'] }}).then(payment => {
        res.json(response({
            status: 'SUCCESS',
            data: payment,
        }))
    }).catch((e) => {
        res.json(response({
            status: 'ERROR',
            msg: 'Error al buscar'
        }))
    });
};

paymentController.create = (req, res) => {
    let data = req.body;
    Payment.create({
        reference: data.reference,
        amount: data.amount,
        date: Date.now(),
        id_type_payment: data.id_type_payment,
        id_type_amount: data.id_type_amount,
    }).then((payment) => {
        res.json(response({
            status: 'SUCCESS',
            data: payment,
        }));
    }).catch((e) => {
        console.log(e);
        res.json(response({
            status: 'ERROR',
            msg: 'Error al registrar el pago'
        })); 
    });
}

module.exports = paymentController;