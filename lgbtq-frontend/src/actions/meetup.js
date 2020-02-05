import {GET_MEETUPS, ADD_MEETUP, UPDATE_MEETUP, GET_CATEGORIES} from "./actionTypes";
import axios from "axios";

const addMeetup = (newMeetup) => {
    return {type: ADD_MEETUP, newMeetup: newMeetup}
}
const getCategories = (categories) => {
    return {type: GET_CATEGORIES, categories: categories}
}
const axiosGetCategories = (categories) => {
return dispatch => {    axios.get('http://localhost:3000/api/categories')
        .then(response => {
            dispatch(getCategories(response.data))
        })
        .catch(e => console.log(e))
}
}
const getMeetups = (meetups) => {
    return {type: GET_MEETUPS, meetups: meetups}
}

const updateMeetup = (updatedMeetup) => {
    return {type: UPDATE_MEETUP, updatedMeetup}
}
const axiosGetMeetups = (meetups) => {
    return dispatch => {
        axios.get('http://localhost:3000/api/meetups')
            .then(response => {
                dispatch(getMeetups(response.data))

            })
            .catch(e => console.warn(e))
    }

}
export {addMeetup, getMeetups, updateMeetup, getCategories, axiosGetMeetups, axiosGetCategories}


// import {ADD_USER, GET_USERS} from "./actionTypes";
//
// const addUser = (newUser) => {
//     return { type: ADD_USER, newUser: newUser }
// };
// export {addUser}
//
// export function getUsers(users) {
//     return { type: GET_USERS, users: users }
// }

