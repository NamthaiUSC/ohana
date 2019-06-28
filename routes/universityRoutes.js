const mongoose = require("mongoose");

const University = mongoose.model("universities");

module.exports = app => {
	app.get("/api/get_uni/:universityName", async (req, res) => {
		await University.findOne({ universityName: req.params.universityName })
			.populate("studentsAttending")
			.exec((err, uni) => {
				res.send(uni);
			});
	});
};
