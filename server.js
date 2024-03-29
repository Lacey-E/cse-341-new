var express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect.js');

var app = express();
const port = process.env.PORT || 3000

app.use(bodyParser.json()).use((req,res,next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    next()
}).use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else{
        app.listen(port, () => {console.log('server is listening on port 3000!')});

    }
});


