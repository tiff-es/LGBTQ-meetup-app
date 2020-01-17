import {ADD_USER, GET_USERS} from "./actionTypes";

const addUser = (user) => {
    return { type: ADD_USER, id:user.id, user: user }
};
 export {addUser}

 export function getUsers(users) {
     return { type: GET_USERS, users: users }
 }
