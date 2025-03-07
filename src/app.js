require("dotenv").config();
const compression = require("compression");
const express = require("express");
const { default: helmet } = require("helmet");
const morgan = require("morgan");
// const { checkOverLoad } = require("./helpers/check.connect");
const app = express();

// init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// init db
require("./dbs/init.mongodb");
// checkOverLoad();
// init routes
app.get("/", (req, res, next) => {
	const msg = "test msg abc";
	return res.status(200).json({
		message: msg,
		//metadata: msg.repeat(1000000),
	});
});

// handle error

module.exports = app;
