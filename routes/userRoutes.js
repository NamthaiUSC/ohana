const mongoose = require("mongoose");

const User = mongoose.model("users");
const HighSchool = mongoose.model("highSchools");
const University = mongoose.model("universities");
const City = mongoose.model("cities");

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
		doc.country = country;
		doc.major = major;
		doc.highSchoolGradYear = highSchoolGradYear;
		doc.universityGradYear = universityGradYear;

		//? dealing with University
		//if valid university name, update two way reference between user and uni
		if (universityName && universityName !== "None") {
			//find uni with input university name
			const uni = await University.findOne({
				universityName: universityName
			});

			//this uni already exists
			if (uni) {
				//if user doesn't have an university yet or current uni is different from input one
				if (doc.university !== uni._id) {
					//delete from old uni if it exists
					if (doc.university) {
						const oldUni = await University.findById(
							doc.university
						);
						oldUni.studentsAttending.remove(id);
						await oldUni.save();
					}

					//update with new uni
					//two way referencing
					doc.university = uni._id;
					uni.studentsAttending.push(id);
					await uni.save();
				}
				//else this uni doesn't exist yet
			} else {
				//deleting from old university if it exists
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

		//? dealing with highschool
		//if valid highschool input
		if (highSchool && highSchool !== "None") {
			//if chosen highschool is different from current one or user has no highschool yet
			if (doc.highSchool !== highSchool) {
				//if user has old highschool, delete user reference from it
				if (doc.highSchool) {
					const oldHS = await HighSchool.findOne({
						highSchoolName: doc.highSchool
					});
					oldHS.studentsAttending.remove(id);
					await oldHS.save();
				}

				//updating user highschool info
				doc.highSchool = highSchool;

				//finding highschool from user input
				const inputHS = await HighSchool.findOne({
					highSchoolName: highSchool
				});

				//if highschool already exists
				if (inputHS) {
					//updating reference for new hs
					inputHS.studentsAttending.push(id);
				} else {
					//else create new highschool and then update reference
					const studentArray = [];
					studentArray.push(id);
					await new HighSchool({
						highSchoolName: highSchool,
						studentsAttending: studentArray
					}).save();
				}
			}
		}

		//? dealing with City
		//if valid city input
		if (city && city !== "None") {
			//if chosen city is different from current one or user has no city yet
			if (doc.city !== city) {
				//if user has old city, delete user reference from it
				if (doc.city) {
					const oldCity = await City.findOne({
						cityName: doc.city
					});
					oldCity.students.remove(id);
					await oldCity.save();
				}

				//updating user city info
				doc.city = city;

				//finding city from user input
				const inputCity = await City.findOne({
					cityName: city
				});

				//if input city already exists
				if (inputCity) {
					//updating reference for updated city
					inputCity.students.push(id);
				} else {
					//else create new city and then update reference
					const studentArray = [];
					studentArray.push(id);
					await new City({
						cityName: city,
						students: studentArray
					}).save();
				}
			}
		}

		await doc.save();

		res.send(doc);
	});
};
