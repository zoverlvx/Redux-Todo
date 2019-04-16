export const ADD = "ADD";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
export const DELETE = "DELETE";
//export const WRITE = "WRITE";

export function addItem(payload) {
	return {
		type: ADD,
		payload
	}
}

export function toggleItem(payload) {
	return {
		type: TOGGLE_COMPLETE,
		payload
	}
}

/*
export function writeItem(payload) {
	return {
		type: WRITE,
		payload
	}
}
*/
