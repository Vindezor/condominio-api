const userController ={};
const {User, TypeUser} = require('../db/sequelize');
const response = require('../utils/global_response');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

function findOne(id) {
    return User.findOne({
        where: {
            id
        },
        include: TypeUser,
    });
}

function findByUsername(username) {
    return User.findOne({
        where: {
            username
        },
        include: TypeUser,
    });
}

function findByEmail(email) {
    return User.findOne({
        where: {
            email
        },
        include: TypeUser,
    });
}

userController.testToken = (req, res) => {
    let token = req.headers.authorization;
    jwt.verify(token, 'secret', (err, decoded) => {
        console.log(err);
        console.log(decoded);
        res.json(response({
            status: 'ERROR',
            msg: 'Usuario o Contraseña inválida',
            data: decoded
        }));
    })
}

userController.loginUser = (req, res) => {
    let data = req.body;
    if(data.username === undefined || data.password === undefined){
        res.json(response({
            status: 'ERROR',
            msg: 'Usuario o Contraseña inválida'
        }));
    } else {
        findByUsername(data.username).then((user) => {
            if(user === null){
                res.json(response({
                    status: 'ERROR',
                    msg: 'Usuario o Contraseña inválida'
                }));
            } else {
                bcrypt.compare(data.password, user.password, (err, result) => {
                    if(result){
                        let token = jwt.sign({
                            status: user.status,
                        }, 'secret', { algorithm: 'HS256', expiresIn: 60 * 60 });
                        res.json(response({
                            status: 'SUCCESS',
                            msg: 'Sesion exitosa',
                            data: {
                                token: token,
                            }
                        }));
                    } else {
                        res.json(response({
                            status: 'ERROR',
                            msg: 'Usuario o Contraseña inválida'
                        }));
                    }
                });
            }
        });
    }
}

userController.createUser = (req, res) => {
    let data = req.body;

    findByUsername(data.username).then((user) => {
        if(user === null){
            findByEmail(data.email).then((user) => {
                if(user === null){
                    bcrypt.hash(data.password, saltRounds, (e, hash) => {
                        if(e){
                            console.log(e);
                            res.json(response({
                                status: 'ERROR',
                                msg: 'Error al registrar usuario'
                            }));
                        } else {
                            User.create({
                                username: data.username,
                                email: data.email,
                                password: hash,
                            }).then((user) => {
                                res.json(response({
                                    status: 'SUCCESS',
                                    data: user,
                                }));
                            }).catch((e) => {
                                console.log(e);
                                res.json(response({
                                    status: 'ERROR',
                                    msg: 'Error al registrar usuario'
                                })); 
                            });
                        }
                    });
                } else {
                    res.json(response({
                        status: 'ERROR',
                        msg: 'Usuario o Correo ya registrado'
                    })); 
                }
            }).catch((e) => {
                console.log(e);
                res.json(response({
                    status: 'ERROR',
                    msg: 'Error al registrar usuario'
                })); 
            });
        } else {
            res.json(response({
                status: 'ERROR',
                msg: 'Usuario o Correo ya registrado'
            })); 
        }
    }).catch((e) => {
        console.log(e);
        res.json(response({
            status: 'ERROR',
            msg: 'Error al registrar usuario'
        })); 
    });
};

userController.get = (req, res, next) => {

    User.findAll({ include: TypeUser }).then(users => {
        res.json(users)
    }).catch(e => {
        console.log(e);
        next();
    });
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