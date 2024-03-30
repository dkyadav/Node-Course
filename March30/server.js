const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("Hello world1234!");
});

app.use(calltwo);

app.get("/new", (req, res) => {
	res.send({ message: "this is new route", count: 0, curdate: req.curdate });
});

app.get("/test1", calltest);

function calltest(req, res) {
	res.send("this is test 1");
}

app.get("/mid", callone, calltwo, finalcall);

function callone(req, res, next) {
    console.log('middleware 1 hit')
	//res.send("mid one called");
    next();
}
function calltwo(req, res, next) {
    req.curdate = new Date();
	//res.send("mid two called");
    next();
}
function finalcall(req, res) {
	res.send(`final called, date: ${req.curdate}`);
}

app.listen(3005, () => {
	console.log("server is running at 3005 port");
});
