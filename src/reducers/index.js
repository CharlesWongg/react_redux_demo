import { combineReducers } from 'redux';
import about from './About';

const reducers = {
	about
};

export default combineReducers({
	...reducers
});