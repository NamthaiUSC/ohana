const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

// grabs a model class from mongoose
const User = mongoose.model("users");

//defining function in order to send cookie to browser with mongoDB user id
passport.serializeUser((user, done) => {
	done(null, user.id);
});

//taking cookie from browser and verifying current user
passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

//passport authentication
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: "/auth/google/callback",
			proxy: true
		},
		async (accessToken, refreshToken, profile, done) => {
			//checks the collection to see if this user already exists by checking profile id
			const existingUser = await User.findOne({ googleId: profile.id });

			if (existingUser) {
				// profile id already exists
				done(null, existingUser);
			} else {
				//create new profile
				const newUser = await new User({
					googleId: profile.id,
					givenName: profile.name.givenName,
					familyName: profile.name.familyName,
					email: profile.emails[0].value,
					photoURL: profile.photos[0].value
				}).save();
				done(null, newUser);
			}
		}
	)
);
