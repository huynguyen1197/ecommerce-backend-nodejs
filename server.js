const app = require("./src/app");

const PORT = 3055;

const server = app.listen(3055, () => {
	console.log(`ECommerce starts on port ${PORT}`);
});

process.on("SIGINT", () => {
	server.close(() => console.log("ECommerce server stops"));
});
