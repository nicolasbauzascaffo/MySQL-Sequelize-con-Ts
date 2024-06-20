var express = require('express');
var app = express();
var port = 8000;
var routes = require('./routes/routes');
var cors = require('cors');
var bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser());
app.use("/", routes);
app.listen(port, function (err) {
    if (err) {
        console.log('Error');
    }
    console.log('Server running at port 8000');
});
