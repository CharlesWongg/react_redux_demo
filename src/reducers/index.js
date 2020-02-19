import { combineReducers } from 'redux';
import about from './About';
import user from './User';

const reducers = {
	about,
	user
};

export default combineReducers({
	...reducers
});