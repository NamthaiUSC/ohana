import axios from "axios";
import { FETCH_USER, GET_UNI } from "./types";

export const fetchUser = () => async dispatch => {
	const user = await axios.get("/api/current_user");
	const res = await axios.get("/api/get_user/" + user.data._id);
	dispatch({ type: FETCH_USER, payload: res.data });
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

export const getUni = universityName => async dispatch => {
	const res = await axios.get("/api/get_uni/" + universityName);
	dispatch({ type: GET_UNI, payload: res.data });
};