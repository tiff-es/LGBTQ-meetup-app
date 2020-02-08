import {GET_MEETUPS, DEFAULT_MAP, ADD_MEETUP, UPDATE_MEETUP, GET_CATEGORIES, GET_MEETUP_COORDINATES} from "./actionTypes";
import axios from "axios";
const addMeetup = (newMeetup) => {
    return {type: ADD_MEETUP, newMeetup: newMeetup}
}
const getCategories = (categories) => {
    return {type: GET_CATEGORIES, categories: categories}
}
const axiosGetCategories = (categories) => {
return dispatch => {    axios.get('http://localhost:3000/api/categories',{headers:               {  Authorization: window.localStorage.getItem('token')}
})
        .then(response => {
            dispatch(getCategories(response.data))
        })
        .catch(e => console.log(e))
}
}
//if localStorage.JWT does not exist redirect
const getMeetups = (meetups) => {
    return {type: GET_MEETUPS, meetups: meetups}
}
const getMeetupLatLng = (meetup) => {
    return {type: GET_MEETUP_COORDINATES, coordinates: meetup}
}
const getMapDefault = (mapParams) => {
    return{type: DEFAULT_MAP, map: mapParams}
}

const updateMeetup = (updatedMeetup) => {
    return {type: UPDATE_MEETUP, updatedMeetup}
}
const axiosGetMeetups = (meetups) => {
    return dispatch => {
        axios.get('http://localhost:3000/api/meetups',{headers:               {  Authorization: window.localStorage.getItem('token')}
    })
            .then(response => {
                dispatch(getMeetups(response.data))

            })
            .catch(e => console.warn(e))
    }

}
export {addMeetup,getMapDefault, getMeetups, updateMeetup, getCategories, axiosGetMeetups, axiosGetCategories, getMeetupLatLng}

