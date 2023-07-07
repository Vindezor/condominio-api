const typePaymentController ={};
const {TypePayment} = require('../db/sequelize');
const response = require('../utils/global_response');

function findOne(id) {
    return TypePayment.findOne({
        where: {
            id
        }
    });
}

typePaymentController.findAll = (req, res, next) => {
    TypePayment.findAll().then((type_payment) => {
        res.json(response({
            status: 'SUCCESS',
            data: type_payment,
        }))
    }).catch((e) => {
        res.json(response({
            status: 'ERROR',
            msg: 'Error al buscar'
        }))
    });
};

typePaymentController.create = (req, res) => {
    if(req.id_type_user >= 2){
        let data = req.body;
        TypePayment.create({
            type_payment: data.type_payment,
        }).then((type_payment) => {
            res.json(response({
                status: 'SUCCESS',
                data: type_payment,
            }));
        }).catch((e) => {
            console.log(e);
            res.json(response({
                status: 'ERROR',
                msg: 'Error al registrar el tipo de propiedad'
            })); 
        });
    } else {
        res.status(403).send();
    }
}

module.exports = typePaymentController;