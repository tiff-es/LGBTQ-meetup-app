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
            };
        default:
            return state;
    }
};
