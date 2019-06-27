const mongoose = require("mongoose");

const User = mongoose.model("users");
const HighSchool = mongoose.model("highSchools");
const University = mongoose.model("universities");

module.exports = app => {
	app.get("/api/get_user/:selfID", async (req, res) => {
		await User.findById(req.params.selfID)
			.populate("university")
			.exec((err, user) => {
				res.send(user);
			});
	});

	app.put("/api/update_info", async (req, res) => {
		const {
			id,
			givenName,
			country,
			city,
			major,
			highSchool,
			highSchoolGradYear,
			universityName,
			universityGradYear
		} = req.body;

		const doc = await User.findById(id);

		doc.givenName = givenName;
		doc.city = city;
		doc.country = country;
		doc.major = major;
		doc.highSchool = highSchool;
		doc.highSchoolGradYear = highSchoolGradYear;
		doc.universityGradYear = universityGradYear;

		if (universityName && universityName != "None") {
			const uni = await University.findOne({
				universityName: universityName
			});

			if (uni) {
				if (doc.university) {
					//if chosen uni is different from current one
					//remove reference to user from that university
					//update references for user and new university
					if (uni !== doc.university) {
						const oldUni = await University.findById(
							doc.university
						);
						oldUni.studentsAttending.remove(id);
						await oldUni.save();

						//two way referencing
						doc.university = uni._id;
						uni.studentsAttending.push(id);
						await uni.save();
					}
				} else {
					//two way referencing
					doc.university = uni._id;
					uni.studentsAttending.push(id);
					await uni.save();
				}
			} else {
				//deleting from old university
				if (doc.university) {
					const oldUni = await University.findById(doc.university);
					oldUni.studentsAttending.remove(id);
					await oldUni.save();
				}

				//create new uni and then two way reference
				const studentArray = [];
				studentArray.push(id);
				const newUni = await new University({
					universityName: universityName,
					studentsAttending: studentArray
				}).save();
				doc.university = newUni._id;
			}
		}

		await doc.save();

		res.send(doc);
	});
};
