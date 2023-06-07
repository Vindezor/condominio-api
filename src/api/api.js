const express=require('express');
const cors = require('cors');
const db = require('../db/db_functions');
var bodyParser = require('body-parser')

var app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(cors());

const response = ({status = null, msg = null, data = null}) => {
    return {
        status: status,
        msg: msg,
        data: data,
    };
}

app.post('/registerUser', (req, res) => {
    let data = req.body;
    db.registerUser(data.username, data.email, data.password).then((resp) => {
        if(resp === 'error'){
            res.json(response({
                status: 'ERROR',
                msg: 'Error al registrar usuario'
            })); 
        } else {
            console.log(resp);
            res.json(response({
                status: 'SUCCESS',
                data: resp,
            }));
        }
    })
});

module.exports = {
    "app": app,
}