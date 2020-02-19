import * as types from '../../constants/ActionTypes';

const initialState = {
	message: ''
}

export default function aboutInfo (state = initialState, action) {
	switch(action.type) {
		case types.SET_MSG:
			return Object.assign({}, state, {
				message: action.data.message
			})
		default:
			return state;
	}
}