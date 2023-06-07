const userController ={};
const {User} = require('../db/sequelize');
const response = require('../utils/global_response');

function findOne(id) {
    return User.findOne({
        where: {
            id
        }
    });
}

userController.createUser = (req, res) => {
    let data = req.body;
    User.create({
        username: data.username,
        email: data.email,
        password: data.password,
    }).then((user) => {
        console.log(resp);
        res.json(response({
            status: 'SUCCESS',
            data: resp,
        }));
    }).catch((e) => {
        console.log(e);
        res.json(response({
            status: 'ERROR',
            msg: 'Error al registrar usuario'
        })); 
    });
};

userController.get = (req, res, next) => {

    User.findAll().then(users => {
        res.json(users)
    }).catch(next);
};

userController.getUser = (req, res, next) => {
    const id = req.params.userId;
    findOne(id).then(user => {
        if(user && user.length){
            res.json(user)
        } else {
            res.status(404).send();
        }
    }).catch(next);
};

userController.getUsers = (req, res, next) => {
    const id = req.params.userId;
    findOne(id).then(users => {
        if(users){
            res.json(users)
        } else {
            res.status(404).send();
        }
    }).catch(next);
};

userController.editUser = (req, res, next) => {
    const newUser = req.body;
    const id = newUser? newUser.id : undefined;
    findOne(id).then(user => {
        if (user) {
            Object.assign(user, newUser);
            user.save().then(user => res.json(user)).catch(next);
        }else {
            res.status(404).send();
        }
    }).catch(next);
};

userController.deleteUser = (req, res, next) => {
    const id = req.params.userId;
    findOne(id).then(user => {
        if (user) {
            user.destroy().then(res.status(200).send()).catch(next);
        }else {
            res.status(404).send();
        }
    }).catch(next);
};

module.exports = userController;