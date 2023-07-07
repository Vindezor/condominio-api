const typeAmountController ={};
const {TypeAmount} = require('../db/sequelize');
const response = require('../utils/global_response');

function findOne(id) {
    return TypeAmount.findOne({
        where: {
            id
        }
    });
}

typeAmountController.findAll = (req, res, next) => {
    TypeAmount.findAll().then((type_amount) => {
        res.json(response({
            status: 'SUCCESS',
            data: type_amount,
        }))
    }).catch((e) => {
        res.json(response({
            status: 'ERROR',
            msg: 'Error al buscar'
        }))
    });
};

typeAmountController.create = (req, res) => {
    if(req.id_type_user >= 2){
        let data = req.body;
        TypeAmount.create({
            type_amount: data.type_amount,
            symbol: data.symbol,
        }).then((type_amount) => {
            res.json(response({
                status: 'SUCCESS',
                data: type_amount,
            }));
        }).catch((e) => {
            console.log(e);
            res.json(response({
                status: 'ERROR',
                msg: 'Error al registrar el tipo de moneda'
            })); 
        });
    } else {
        res.status(403).send();
    }
}

module.exports = typeAmountController;