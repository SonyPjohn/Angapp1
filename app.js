require('./config/config');
require ('./models/db');


const express = require("express");
var path = require('path');
const bodyParser = require("body-parser");
const cors = require('cors');
const rtsIndex = require('./routes/index.router');



var app = express();


app.use(bodyParser.json());
app.use(cors());

app.use('/api' , rtsIndex );
console.log('hereeeeeeeeeeeeeeeeeeee');
app.use((err, req, res, next) =>{
    if( err.username == 'validationError'){
        var valErrors = [];
        Object.keys(err.errors).forEach(key =>  valErrors.push(err.errors[key].message));
        res.status.send(valErrors)
    }
})



app.listen(process.env.PORT, () =>

console.log(`server started at port : ${process.env.PORT}`));



 