const mongoose = require("mongoose");

const City = mongoose.model("cities");

module.exports = app => {
	app.get("/api/get_all_cities", async (req, res) => {
		const cities = await City.find();
		res.send(cities);
	});
};
