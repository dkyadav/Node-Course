const express = require('express');

const { deafult_router } = require('./routes/default.route');

const app = express();
//const app = require('express')();
require('dotenv').config();

const port = process.env.SERVER_PORT || 5446;

function addDateTime(req,res,next) {
    req.current_date = new Date();
    console.log('Middleware hit1!');
    next();
}

app.use(express.json());
//app.use(addDateTime);
app.use(deafult_router);


app.get('/',addDateTime,(req,res,next)=>{
    res.send({'message':'hello world!','cur_date':req.current_date});
});

app.get('/health',(req,res,next)=>{
    res.send({'message':'hello world!','cur_date':req.current_date});
});


app.listen(port,()=>{
    console.log(`server running on port: ${port}`);
})
