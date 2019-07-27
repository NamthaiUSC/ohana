const mongoose = require("mongoose");

const University = mongoose.model("universities");

module.exports = app => {
	app.get("/api/get_uni/:universityName", async (req, res) => {
		const { country, webPage } = req.query;
		await University.findOne({ universityName: req.params.universityName })
			.populate("studentsAttending")
			.exec(async (err, uni) => {
				if (uni) {
					if (!uni.country) {
						uni.country = country;
					}
					if (!uni.webPage) {
						uni.webPage = webPage;
					}
					uni.save();
					res.send(uni);
				} else {
					const newUni = await new University({
						universityName: req.params.universityName,
						country: country,
						webPage: webPage,
						studentsAttending: []
					}).save();

					res.send(newUni);
				}
			});
	});
};
