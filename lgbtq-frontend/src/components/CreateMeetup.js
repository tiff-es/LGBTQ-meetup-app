import React, {Component} from "react";
import axios from 'axios'
import {connect} from 'react-redux'
import {addMeetup,updateMeetup} from "../actions/meetup";
// import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";

class CreateMeetup extends {Component}{

}
const mapStateToProps = (state) => {
    return{newMeetup: state.newMeetup}
}

const mapDispatchToProps = (dispatch) => {
    return{
        addMeetup: (newMeetup) => {
            dispatch(addMeetup(newMeetup))
        }
     }
}


export default connect(mapStateToProps, mapDispatchToProps){CreateMeetup)