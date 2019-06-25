import { GET_UNI } from "../actions/types";

export default function(state = null, action) {
	switch (action.type) {
		case GET_UNI:
			return action.payload || false;

		default:
			return state;
	}
}
