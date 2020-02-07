import {GET_USERS, LOGIN_USER} from "./actionTypes";
import axios from "axios";

// const addUser = (newUser) => {
//     return { type: ADD_USER, newUser: newUser }
// };
//  export {addUser}

 export function getUsers(users) {
     return { type: GET_USERS, users: users }
 }
export const axiosGetUsers = (users) => {
    return dispatch => {
        axios.get('http://localhost:3000/api/users')
            .then(response => {
                dispatch(getUsers(response.data))
            })
            .catch(e => console.log(e))
    }
}
export const getProfileFetch = () => {
    return dispatch => {
        const token = localStorage.token;
        if (token) {
            return fetch("http://localhost:3000/api/users", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(resp => resp.json())
                .then(data => {
                    if (data.message) {
                        // An error will occur if the token is invalid.
                        // If this happens, you may want to remove the invalid token.
                        localStorage.removeItem("token")
                    } else {
                        dispatch(loginUser(data.user))
                    }
                })
        }
    }
}
export const loginUser = (userInfo) => {
    return {type: LOGIN_USER, currentUser: userInfo}
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
                console.warn(data.message)
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
                   console.warn(data.message)
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