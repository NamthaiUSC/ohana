const mongoose = require("mongoose");
const { Schema } = mongoose;

//defines a new mongoDB schema
const userSchema = new Schema({
	googleId: String,
	givenName: String,
	familyName: String,
	email: String,
	photoURL: String,
	country: String,
	city: String,
	major: String,
	highSchoolGradYear: Number,
	universityGradYear: Number,
	highSchool: String,
	university: String,
	universitiesApplying: [
		{
			type: Schema.Types.ObjectId,
			ref: "universities"
		}
	]
});

//creates a model class in mongoose
mongoose.model("users", userSchema);
