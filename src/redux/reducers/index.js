import {combineReducers} from 'redux';

import auth from './authReducer'
import users from './usersReducer'
import messages from './messagesReducer'
import currentUser from './currentUserReducer'

export default combineReducers({
    auth,
    users,
    messages,
    currentUser
})