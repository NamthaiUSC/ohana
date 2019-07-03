const mongoose = require("mongoose");

const University = mongoose.model("universities");

module.exports = app => {
	app.get("/api/get_uni/:universityName", async (req, res) => {
		await University.findOne({ universityName: req.params.universityName })
			.populate("studentsAttending")
			.exec(async (err, uni) => {
				if (uni) {
					res.send(uni);
				} else {
					const newUni = await new University({
						universityName: req.params.universityName,
						studentsAttending: []
					}).save();

					res.send(newUni);
				}
			});
	});
};
