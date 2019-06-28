const mongoose = require("mongoose");

const HighSchool = mongoose.model("highSchools");

module.exports = app => {
	app.get("/api/get_all_highschools", async (req, res) => {
		const highSchools = await HighSchool.find();
		res.send(highSchools);
	});
};
