const mongoose = require("mongoose");
const { Schema } = mongoose;

//defines a new mongoDB schema
const citySchema = new Schema({
	cityName: { type: String, index: true },
	students: [
		{
			type: Schema.Types.ObjectId,
			ref: "users"
		}
	]
});

//creates a model class in mongoose
mongoose.model("cities", citySchema);
