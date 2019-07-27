const mongoose = require("mongoose");
const { Schema } = mongoose;

//defines a new mongoDB schema
const universitySchema = new Schema({
	universityName: { type: String, index: true },
	webPage: String,
	country: String,
	studentsAttending: [
		{
			type: Schema.Types.ObjectId,
			ref: "users"
		}
	],
	studentsApplying: [
		{
			type: Schema.Types.ObjectId,
			ref: "users"
		}
	]
});

//creates a model class in mongoose
mongoose.model("universities", universitySchema);
