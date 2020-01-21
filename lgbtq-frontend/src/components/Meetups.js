import React from "react";
import axios from 'axios'
import {connect} from 'react-redux'
import {addMeetup,getMeetups,updateMeetup} from "../actions/meetup";
import {Card} from "react-bootstrap";
import CardTitle from "react-bootstrap/Card";

class Meetups extends React.Component {
    state = {
        meetups: []
    }

     getMeetups() {
        axios.get('http://localhost:3000/meetups')
            .then(response => {
                this.props.getMeetups(response.data)
            })
            .catch(e => console.warn(e))
    }

    componentDidMount() {
        this.getMeetups()
    }

    render() {



        //     this.props.meetups.map(meetup =>
        //     {return (<Card class='meetupCard card'>
        //         <CardTitle><h1 align-='center' className='meetup-card header'>{meetup.location}</h1>
        //         </CardTitle>
        //         <div class='card-body'>
        //             Location: {meetup.location}
        //             Time: {meetup.time}
        //             Date: {meetup.date}
        //             Category: {meetup.category}
        //             Info: {meetup.info}
        //         </div>
        //     </Card>)}
        // )



        return(
            <div>

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