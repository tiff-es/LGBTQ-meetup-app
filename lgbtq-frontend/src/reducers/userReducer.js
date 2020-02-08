import {ADD_USER, GET_USERS, LOGIN, LOGIN_USER} from "../actions/actionTypes";
import uuid from 'uuid';

export default function manageUsers(state = {
    users: [],
    isLoggedIn: false,
    currentUser: {},
    newUser: {
        username: '',
        password: '',
        name: '',
        picture: '',
        bio: '',
        pronouns: ''

    }
}, action){
    switch (action.type) {
        case GET_USERS:
            return {...state, users: action.users}
        case ADD_USER:

            return {...state, users: [...state.users, action.newUser]}
        case LOGIN_USER:
            return {
                ...state, currentUser: action.currentUser, isLoggedIn: true
            }
        case 'GET_USERS_REQUEST':
            console.log('getting users')
        case 'GET_USERS_SUCCESS':
            return  {...state , users: action.users}
        default:
            return state;
    }
};
