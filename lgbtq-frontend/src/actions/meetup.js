import {GET_MEETUPS, ADD_MEETUP, UPDATE_MEETUP} from "./actionTypes";

const addMeetup = (newMeetup) => {
    return {type: ADD_MEETUP, newMeetup: newMeetup}
}

const getMeetups = (meetups) => {
    return {type: GET_MEETUPS, meetups: meetups}
}

const updateMeetup = (updatedMeetup) => {
    return {type: UPDATE_MEETUP, updatedMeetup}
}

export {addMeetup, getMeetups, updateMeetup}


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

