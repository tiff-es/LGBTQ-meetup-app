export default function manageUsers(state = {
    users: [],
    currentUser: {
        username: '',
        password: ''
    }
}, action){
    switch (action.type) {
        case 'ADD_USER':
            console.log('adding ', action.user);
            return {
                ...state,
                users: [...state.users, action.user]
            }
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
