import { GET_ALL_HS } from "../actions/types";

export default function(state = null, action) {
	switch (action.type) {
		case GET_ALL_HS:
			return action.payload || false;

		default:
			return state;
	}
}
