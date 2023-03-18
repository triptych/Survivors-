const express = require("express");
const app = express();
const server = require("http").createServer(app);
const port = process.env.PORT || 3000;

app.use(function(req, res, next) {
	res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
	res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
	next();
});

app.use(express.static("public"));

server.listen(port, function() {
	console.log("Listening on port:", port);
});