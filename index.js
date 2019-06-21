const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./models/User");
require("./models/HighSchool");
require("./models/University");
require("./services/passport");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

// notifies if you're connected to MongoDB Atlas
var db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error: "));
db.once("open", function() {
	console.log("Connected to MongoDB");
});

const app = express();

app.use(bodyParser.json());
app.use(
	cookieSession({
		//sets expiry time for cookies to 30 days, expressed in milliseconds below
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
userRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
