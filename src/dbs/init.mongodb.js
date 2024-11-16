"use strict";

const mongooose = require("mongoose");
const { countConnect } = require("../helpers/check.connect");

const connectionString = `mongodb://localhost:27017/shopDEV`;

class Database {
	constructor() {
		this.connect();
	}

	//connect
	connect(type = "mongodb") {
		if (1 === 1) {
			mongooose.set("debug", true);
			mongooose.set("debug", { color: true });
		}

		mongooose
			.connect(connectionString, {
				maxPoolSize: 100,
			})
			.then((_) => {
				console.log(`Connected Mongodb Successfully`);
				countConnect();
			})
			.catch((err) => console.log(`Error Connect!`));
	}

	static getInstance() {
		if (!Database.instance) {
			Database.instance = new Database();
		}

		return Database.instance;
	}
}

const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;
