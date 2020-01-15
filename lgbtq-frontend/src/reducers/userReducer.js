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
            console.log('current user: ', action.currentUser);
            return {
                ...state,
                currentUser: [...state.users, action.currentUser]
            }

        default:
            return state;
    }
};
