const express=require('express');
const cors = require('cors');
var bodyParser = require('body-parser')

var app = express();

const userRouter = require('./routes/user_route');
const typeUserRouter = require('./routes/type_user_route');

app.use(bodyParser.json({limit: '50mb'}));
app.use(cors());
app.use('/api', userRouter);
app.use('/api', typeUserRouter);

app.listen(3000, () => console.log("listening on port 3000"));