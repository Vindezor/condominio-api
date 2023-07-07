const propertyController ={};
const {Property, TypeProperty} = require('../db/sequelize');
const response = require('../utils/global_response');

function findOne(id) {
    return Property.findOne({
        where: {
            id
        }
    });
}

propertyController.findAll = (req, res, next) => {
    Property.findAll({ include: TypeProperty, attributes: { exclude: ['id_type_property'] }}).then(property => {
        res.json(response({
            status: 'SUCCESS',
            data: property,
        }))
    }).catch((e) => {
        res.json(response({
            status: 'ERROR',
            msg: 'Error al buscar'
        }))
    });
};

propertyController.create = (req, res) => {
    if(req.id_type_user >= 2){
        let data = req.body;
        Property.create({
            property: data.property,
            id_type_property: data.id_type_property,
        }).then((property) => {
            res.json(response({
                status: 'SUCCESS',
                data: property,
            }));
        }).catch((e) => {
            console.log(e);
            res.json(response({
                status: 'ERROR',
                msg: 'Error al registrar la propiedad'
            })); 
        });
    } else {
        res.status(403).send();
    }
}

module.exports = propertyController;