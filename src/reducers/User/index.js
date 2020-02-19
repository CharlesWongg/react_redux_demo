import * as types from '../../constants/ActionTypes';

const initialState = {
	users: []
}

export default function userInfo (state = initialState, action) {
	switch(action.type) {
		case types.SET_USER:
			// return Object.assign({}, state, {
			// 	message: action.data.message
			// })
			return {
				...state,
				users: action.data.users
			}
		default:
			return state;
	}
}