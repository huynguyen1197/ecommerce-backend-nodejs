"use strict";

const mongoose = require("mongoose");
const os = require("os");
const process = require("process");

const _SECONDS = 5000;
const _MAX_CONNECTION_PER_CORE = 5;
const _KB = 1024;
// count connect
const countConnect = () => {
	const numConnection = mongoose.connections.length;
	console.log(`Number of connections: ${numConnection}`);
};

//check over load
const checkOverLoad = () => {
	setInterval(() => {
		const numConnection = mongoose.connections.length;
		const numCores = os.cpus().length;
		const memUsed = process.memoryUsage().rss;

		console.log(`Active connections: ${numConnection}`);

		console.log(`Memory usage: ${memUsed / _KB / _KB} MB`);

		if (numConnection > numCores * _MAX_CONNECTION_PER_CORE) {
			console.log(`Connection overload detected!`);
		}
	}, _SECONDS);
};

module.exports = {
	countConnect,
	checkOverLoad,
};
