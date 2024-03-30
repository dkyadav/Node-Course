const deafult_router = require('express').Router();

deafult_router.get('/test',(req,res)=>{
    res.send('test hit successfully!');
});

deafult_router.get('/test1',(req,res)=>{
    res.send('test1 hit successfully!');
});

deafult_router.post('/test2',(req,res)=>{
    console.log(req.body);
    res.send('test2 hit successfully!');
});


module.exports = {
    deafult_router    
}
