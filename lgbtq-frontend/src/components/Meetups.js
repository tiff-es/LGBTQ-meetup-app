import React from "react";
import axios from 'axios'
import {connect} from 'react-redux'
import {addMeetup,getMeetups,updateMeetup} from "../actions/meetup";
import {Card} from "react-bootstrap";
import CardTitle from "react-bootstrap/Card";
import MeetupCard from "./MeetupCard";
class Meetups extends React.Component {
    // state = {
    //     meetups: []
    // }

     axiosGetMeetups() {
        axios.get('http://localhost:3000/api/meetups')
            .then(response => {
                this.props.getMeetups(response.data)

            })
            .catch(e => console.warn(e))
    }

    componentDidMount() {
        this.axiosGetMeetups()
    }



    render() {

        return(
    <div className='modal-body'>
    </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{meetups: state.meetups}
}

const mapDispatchToProps = (dispatch) => {
    return{
        getMeetups: (meetups) => {
            dispatch(getMeetups(meetups))
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Meetups)