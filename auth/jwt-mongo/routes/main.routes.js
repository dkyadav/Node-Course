const { signin } = require("../controllers/auth.controller");

const mainRoute = require("express").Router();

mainRoute.get("/api/v1/health",(req,res)=>{
    res.send('health ok!');
});

mainRoute.post("/api/v1/signin",signin);

module.exports = {
    mainRoute,
};