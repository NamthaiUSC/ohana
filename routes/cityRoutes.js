const mongoose = require("mongoose");

const City = mongoose.model("cities");

module.exports = app => {
	app.get("/api/get_all_cities", async (req, res) => {
		const cities = await City.find().sort("cityName");
		res.send(cities);
	});

	app.get("/api/get_city/:cityName", async (req, res) => {
		await City.findOne({ cityName: req.params.cityName })
			.populate("students")
			.exec(async (err, city) => {
				res.send(city);
			});
	});
};
