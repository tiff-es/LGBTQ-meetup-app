import {ADD_USER, GET_USERS} from "./actionTypes";

const addUser = (newUser) => {
    return { type: ADD_USER, newUser: newUser }
};
 export {addUser}

 export function getUsers(users) {
     return { type: GET_USERS, users: users }
 }
