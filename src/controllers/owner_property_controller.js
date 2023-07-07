const ownerPropertyController ={};
const {OwnerProperty, Owner, Property} = require('../db/sequelize');
const response = require('../utils/global_response');

function findOne(id) {
    return OwnerProperty.findOne({
        where: {
            id
        }
    });
}

ownerPropertyController.findAll = (req, res, next) => {
    OwnerProperty.findAll({ include: [Owner, Property], attributes: { exclude: ['id_owner', 'id_property']} }).then(owner_property => {
        res.json(response({
            status: 'SUCCESS',
            data: owner_property,
        }))
    }).catch((e) => {
        res.json(response({
            status: 'ERROR',
            msg: 'Error al buscar'
        }))
    });
};

ownerPropertyController.create = (req, res) => {
    if(req.id_type_user >= 2){
        let data = req.body;
        OwnerProperty.create({
            id_owner: data.id_owner,
            id_property: data.id_property,
        }).then((owner_property) => {
            res.json(response({
                status: 'SUCCESS',
                data: owner_property,
            }));
        }).catch((e) => {
            console.log(e);
            res.json(response({
                status: 'ERROR',
                msg: 'Error al registrar la propiedad del dueño'
            })); 
        });
    } else {
        res.status(403).send();
    }
}

module.exports = ownerPropertyController;