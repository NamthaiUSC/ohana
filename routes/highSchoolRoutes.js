const mongoose = require("mongoose");

const HighSchool = mongoose.model("highSchools");

module.exports = app => {
	app.get("/api/get_all_highschools", async (req, res) => {
		const highSchools = await HighSchool.find().sort("highSchoolName");
		res.send(highSchools);
	});

	app.get("/api/get_highschool/:highschoolName", async (req, res) => {
		await HighSchool.findOne({ highSchoolName: req.params.highschoolName })
			.populate("studentsAttending")
			.exec(async (err, hs) => {
				res.send(hs);
			});
	});
};
