const express=require('express');
const cors = require('cors');
var bodyParser = require('body-parser')

var app = express();

const userRouter = require('./routes/user_route');
const typeUserRouter = require('./routes/type_user_route');
const propertyRouter = require('./routes/property_route');
const ownerRouter = require('./routes/owner_route');
const typePropertyRouter = require('./routes/type_property_route');
const ownerPropertyRouter = require('./routes/owner_property_route');
const typePaymentRouter = require('./routes/type_payment_route');
const typeAmountRouter = require('./routes/type_amount_route');
const paymentRouter = require('./routes/payment_route');

app.use(bodyParser.json({limit: '50mb'}));
app.use(cors());
app.use('/api', userRouter);
app.use('/api', typeUserRouter);
app.use('/api', propertyRouter);
app.use('/api', ownerRouter);
app.use('/api', typePropertyRouter);
app.use('/api', ownerPropertyRouter);
app.use('/api', typePaymentRouter);
app.use('/api', typeAmountRouter);
app.use('/api', paymentRouter);

app.listen(3000, () => console.log("listening on port 3000"));