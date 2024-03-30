const express = require("express");
require("dotenv").config();
const { join } = require("path");
const { Server } = require("socket.io");
const { createServer } = require("http");
const PORT = process.env.serverport || 3555;

const app = express();
const server = createServer(app);
const io = new Server(server);

// Get the client
//const mysql = require("mysql2");

const { connection } = require("./mysql");

// connection.query(
// 	`INSERT INTO logs(req_txt,res_txt,detail_txt) 
// 	VALUES('req_txt','res_txt','detail_txt')`,
// 	function (err, results) {
// 		console.log(results); // results contains rows returned by server
		
// 	}
// );

connection.query(
	"SELECT * FROM `logs` order by id_int desc limit 2",
	function (err, results, fields) {
		console.log(results); // results contains rows returned by server
		console.log(fields); // fields contains extra meta data about results, if available
	}
);

// console.log(db_connection);

// (async () => {
// 	try {
// 		const [results, fields] = await connection.query(
// 			"SELECT * FROM `logs` order by id_int desc limit 5"
// 		);

// 		console.log(results); // results contains rows returned by server
// 		console.log(fields); // fields contains extra meta data about results, if available
// 	} catch (err) {
// 		console.log(err);
// 	}
// })();

// app.get("/", (req, res) => {
// 	res.send("<h1>Hello world</h1>");
// });

io.on("connection", (socket) => {
	console.log("a user connected");
	//for seleted broadcast
	//socket.broadcast.emit("hi");

	connection.query(
		`INSERT INTO logs(req_txt) 
		VALUES('user connected')`,
		function (err, results) {
			console.log(results); // results contains rows returned by server
			
		}
	);

	socket.on("chat message", (msg) => {
		io.emit("chat message", msg);
		console.log("message: " + msg);

		connection.query(
			`INSERT INTO logs(req_txt,detail_txt) 
			VALUES('chat message','${msg}')`,
			function (err, results) {
				if(err)
					console.log(error);
				console.log(results); // results contains rows returned by server
				
			}
		);

	});

	socket.on("disconnect", () => {
		console.log("user disconnected");
		connection.query(
			`INSERT INTO logs(req_txt) 
			VALUES('user disconnected')`,
			function (err, results) {
				console.log(results); // results contains rows returned by server
				
			}
		);
	});
});

app.get("/", (req, res) => {
	res.sendFile(join(__dirname, "index.html"));
});

server.listen(PORT, () => {
	console.log(`Server is running at port:${PORT}`);
});

process.on("uncaughtException", (e) => {
	console.error(e);
	process.exit(0);
});

process.on("error", (e) => {
	console.error(e);
	process.exit(0);
});


