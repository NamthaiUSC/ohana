import { combineReducers } from "redux";
import authReducer from "./authReducer";
import uniReducer from "./uniReducer";
import { reducer as formReducer } from "redux-form";
import hsReducer from "./hsReducer";
import cityReducer from "./cityReducer";
import studentReducer from "./studentReducer";

export default combineReducers({
	auth: authReducer,
	form: formReducer,
	uni: uniReducer,
	highSchools: hsReducer,
	cities: cityReducer,
	student: studentReducer
});
