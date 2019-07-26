const mongoose = require("mongoose");
const { Schema } = mongoose;

//defines a new mongoDB schema
const highSchoolSchema = new Schema({
	highSchoolName: { type: String, index: true },
	city: String,
	studentsAttending: [
		{
			type: Schema.Types.ObjectId,
			ref: "users"
		}
	],
	alumni: [
		{
			type: Schema.Types.ObjectId,
			ref: "users"
		}
	]
});

//creates a model class in mongoose
mongoose.model("highSchools", highSchoolSchema);
