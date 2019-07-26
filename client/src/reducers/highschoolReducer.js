import { GET_HIGHSCHOOL } from "../actions/types";

export default function(state = null, action) {
	switch (action.type) {
		case GET_HIGHSCHOOL:
			return action.payload || false;

		default:
			return state;
	}
}
