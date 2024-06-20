const express = require('express')
const app = express()
const port = 8000
const routes = require('./routes/routes')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser());
app.use("/", routes);

app.listen(port,(err)=> {
    if(err){
        console.log('Error')
    }
    console.log('Server running at port 8000')
})