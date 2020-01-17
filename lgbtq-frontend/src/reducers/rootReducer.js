
import { combineReducers } from 'redux'
import manageUsers from './userReducer'

const rootReducer = combineReducers({
    users: manageUsers
});

export default rootReducer;