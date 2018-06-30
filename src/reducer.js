//combineReducer方法是在创建store前用的方法，目的是合并多个不同的reducer；
import { combineReducers } from 'redux';

import { user } from './redux/user.redux';
import { chat } from  './redux/chat.redux';
import { nav } from  './redux/navBar.redux';

export default combineReducers({user,chat,nav});