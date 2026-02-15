import { combineReducers } from 'redux';
import playerReducer from './player';
import shopReducer from './shop';
import screenReducer from './screen';

const reducer = combineReducers({ shopReducer, playerReducer, screenReducer });

export default reducer;
