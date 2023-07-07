const typePropertyController ={};
const {TypeProperty} = require('../db/sequelize');
const response = require('../utils/global_response');

function findOne(id) {
    return TypeProperty.findOne({
        where: {
            id
        }
    });
}

typePropertyController.findAll = (req, res, next) => {
    TypeProperty.findAll().then((type_property) => {
        res.json(response({
            status: 'SUCCESS',
            data: type_property,
        }))
    }).catch((e) => {
        res.json(response({
            status: 'ERROR',
            msg: 'Error al buscar'
        }))
    });
};

typePropertyController.create = (req, res) => {
    if(req.id_type_user >= 2){
        let data = req.body;
        TypeProperty.create({
            type_property: data.type_property,
        }).then((type_property) => {
            res.json(response({
                status: 'SUCCESS',
                data: type_property,
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

module.exports = typePropertyController;