const express=require('express');
const cors = require('cors');
var bodyParser = require('body-parser')

var app = express();

const userRouter = require('./routes/user_route');

app.use(bodyParser.json({limit: '50mb'}));
app.use(cors());
app.use('/api', userRouter);

app.listen(3000, () => console.log("listening on port 3000"));