import { combineReducers } from "redux";
import authReducer from "./authReducer";
import uniReducer from "./uniReducer";
import { reducer as formReducer } from "redux-form";
import allHighSchoolsReducer from "./allHighSchoolsReducer";
import allCitiesReducer from "./allCitiesReducer";
import studentReducer from "./studentReducer";
import cityReducer from "./cityReducer";
import highschoolReducer from "./highschoolReducer";

export default combineReducers({
	auth: authReducer,
	form: formReducer,
	uni: uniReducer,
	highSchools: allHighSchoolsReducer,
	cities: allCitiesReducer,
	student: studentReducer,
	city: cityReducer,
	highschool: highschoolReducer
});
