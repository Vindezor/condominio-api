const ownerController ={};
const {Owner} = require('../db/sequelize');
const response = require('../utils/global_response');

function findOne(id) {
    return Owner.findOne({
        where: {
            id
        }
    });
}

ownerController.findAll = (req, res, next) => {
    Owner.findAll().then(owners => {
        res.json(response({
            status: 'SUCCESS',
            data: owners,
        }))
    }).catch((e) => {
        res.json(response({
            status: 'ERROR',
            msg: 'Error al buscar'
        }))
    });
};

ownerController.create = (req, res) => {
    let data = req.body;
    Owner.create({
        full_name: data.full_name,
        contact_number: data.contact_number,
        emergency_number: data.emergency_number,
    }).then((owner) => {
        res.json(response({
            status: 'SUCCESS',
            data: owner,
        }));
    }).catch((e) => {
        console.log(e);
        res.json(response({
            status: 'ERROR',
            msg: 'Error al registrar dueño'
        })); 
    });
}