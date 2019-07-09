const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");

require("./models/User");
require("./models/HighSchool");
require("./models/University");
require("./models/City");
require("./services/passport");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const universityRoutes = require("./routes/universityRoutes");
const highSchoolRoutes = require("./routes/highSchoolRoutes");
const cityRoutes = require("./routes/cityRoutes");

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

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
universityRoutes(app);
highSchoolRoutes(app);
cityRoutes(app);

if (process.env.NODE_ENV === "production") {
	//Express will serve up production assets like our main.js file
	//if get requests come in and we don't understand what it is, look in "client/build" to see if a file there matches
	app.use(express.static("client/build"));

	//Express will serve up the index.htm file if it doesn't recognize the route
	const path = require("path");
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
