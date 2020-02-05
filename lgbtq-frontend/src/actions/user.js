import {GET_USERS, LOGIN_USER} from "./actionTypes";

// const addUser = (newUser) => {
//     return { type: ADD_USER, newUser: newUser }
// };
//  export {addUser}

 export function getUsers(users) {
     return { type: GET_USERS, users: users }
 }

export const loginUser = (userObj) => {
    return {type: LOGIN_USER, payload: userObj}
}


export const userLoginFetch = user => {
    return dispatch => {
        return fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({user})
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.message) {
                    // Here you should have logic to handle invalid login credentials.
                    // This assumes your Rails API will return a JSON object with a key of
                    // 'message' if there is an error
                } else {
                    localStorage.setItem("token", data.jwt)
                    dispatch(loginUser(data.user))
                }
            })
    }
}

export const userPostFetch = user => {
    return dispatch => {
        return fetch("http://localhost:3000/api/users", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({user})
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.message) {
                    // Here you should have logic to handle invalid creation of a user.
                    // This assumes your Rails API will return a JSON object with a key of
                    // 'message' if there is an error with creating the user, i.e. invalid username
                } else {
                    localStorage.setItem("token", data.jwt)
                    dispatch(loginUser(data.user))
                }
            })
    }
}

// const loginUser = userObj => ({
//     type: 'LOGIN_USER',
//     payload: userObj
// })