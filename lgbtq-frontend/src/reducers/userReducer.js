import {ADD_USER, GET_USERS} from "../actions/actionTypes";

export default function manageUsers(state = {
    users: [],
    currentUser: {
        username: '',
        password: ''
    }
}, action){
    switch (action.type) {
        case GET_USERS:
            return state.users, action.users
        case  ADD_USER:
            return [
                ...state,
                {
                    id: action.id,
                    user: action.user,
                }
            ];

        case 'LOGIN':
            console.log(state.currentUser, state.currentUser.username);
            return {
                ...state, currentUser: action.currentUser
            }
        case 'GET_USERS_REQUEST':
            console.log('getting users')
        case 'GET_USERS_SUCCESS':
            return  {...state , users: action.users}
        default:
            return state;
    }
};
