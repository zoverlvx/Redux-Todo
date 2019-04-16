import {ADD, TOGGLE_COMPLETE, DELETE} from "../actions";

export const listReducer = (
	state = [
		{
			task: "Clean garage", 
			id: (new Date()).getTime(), 
			completed: false
		}
	], 
	action
) => {
	switch (action.type) {
		case ADD:
			return [...state, action.payload];
		case TOGGLE_COMPLETE:
			return [
				...state.map(
					(item, index) => {
						if (index === action.payload) {
							console.log("here is the payload: ", action.payload)
							return {
								...item, 
								completed: !item.completed
							}
						}
						return item;
					}
				)
			]
		default:
			return state;
	}
}

