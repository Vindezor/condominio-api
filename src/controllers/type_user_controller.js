const typeUserController ={};
const {TypeUser} = require('../db/sequelize');
const response = require('../utils/global_response');

function findOne(id) {
    return User.findOne({
        where: {
            id
        }
    });
}

typeUserController.findAll = (req, res, next) => {
    TypeUser.findAll().then(users => {
        res.json(users)
    }).catch(next);
};

typeUserController.findById = (req, res, next) => {
    const id = req.params.typeUserId;
    findOne(id).then(typeUser => {
        if(typeUser){
            res.json(user)
        } else {
            res.status(404).send();
        }
    }).catch(next);
};