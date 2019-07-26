import axios from "axios";
import {
	FETCH_USER,
	GET_UNI,
	GET_ALL_HS,
	GET_ALL_CITY,
	GET_STUDENT,
	GET_CITY,
	GET_HIGHSCHOOL
} from "./types";

export const fetchUser = () => async dispatch => {
	const user = await axios.get("/api/current_user");
	const res = await axios.get("/api/get_user/" + user.data._id);
	dispatch({ type: FETCH_USER, payload: res.data });

	//anytie user is fetched, also get user's city and highschool student data
	const city = await axios.get("/api/get_city/" + res.data.city);
	dispatch({ type: GET_CITY, payload: city.data });

	const hs = await axios.get("/api/get_highschool/" + res.data.highSchool);
	dispatch({ type: GET_HIGHSCHOOL, payload: hs.data });
};

//values is an object with input from a form
export const updateInfo = (values, history) => async dispatch => {
	await axios.put("/api/update_info", values);
	const res = await axios.get("/api/get_user/" + values.id);
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const getUser = selfID => async dispatch => {
	const res = await axios.get("/api/get_user/" + selfID);
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const addToApplying = (selfID, universityID) => async dispatch => {
	await axios.put("/api/add_to_applying/", {
		data: { selfID: selfID, universityID: universityID }
	});
	const res = await axios.get("/api/get_user/" + selfID);

	dispatch({ type: FETCH_USER, payload: res.data });
};

export const deleteFromApplying = (selfID, universityID) => async dispatch => {
	await axios.put("/api/delete_from_applying/", {
		data: { selfID: selfID, universityID: universityID }
	});
	const res = await axios.get("/api/get_user/" + selfID);

	dispatch({ type: FETCH_USER, payload: res.data });
};

export const getStudent = id => async dispatch => {
	const res = await axios.get("/api/get_user/" + id);
	dispatch({ type: GET_STUDENT, payload: res.data });
};

export const getUni = universityName => async dispatch => {
	const res = await axios.get("/api/get_uni/" + universityName);
	dispatch({ type: GET_UNI, payload: res.data });
};

export const getAllHighSchools = () => async dispatch => {
	const res = await axios.get("/api/get_all_highschools");
	dispatch({ type: GET_ALL_HS, payload: res.data });
};

export const getAllCities = () => async dispatch => {
	const res = await axios.get("/api/get_all_cities");
	dispatch({ type: GET_ALL_CITY, payload: res.data });
};

export const getCity = cityName => async dispatch => {
	const res = await axios.get("/api/get_city/" + cityName);
	dispatch({ type: GET_CITY, payload: res.data });
};

export const getHighSchool = highschoolName => async dispatch => {
	const res = await axios.get("/api/get_highschool/" + highschoolName);
	dispatch({ type: GET_HIGHSCHOOL, payload: res.data });
};
