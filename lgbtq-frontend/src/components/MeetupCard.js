import React from "react";
import {Card} from "react-bootstrap";
import Moment from 'react-moment'
import MapComponent from "./MapComponent";
import {connect} from 'react-redux'
import {getMapDefault, getMeetupLatLng} from "../actions/meetup";
import {MDBCard, MDBCardBody, MDBCardHeader, MDBCardTitle} from "mdbreact";

const MeetupCard = (props) => {
    return(
        <MDBCard className='card'>
            <MDBCardHeader className='header'><h3><b>{props.name}</b></h3></MDBCardHeader>
            <MDBCardTitle className='header'><h5><b>{props.info}</b> </h5></MDBCardTitle>
            <MDBCardBody className='header'> Location: <b>{props.location}</b></MDBCardBody>
            <MapComponent lat={props.lat} lon={props.lon} meetup={props} />
            {/* ^^  latitude, longitude, props passed down via props  ^^ */}
            <MDBCardBody className='body'>Start Time: <b><Moment date={props.time} format='hh:mm A'> </Moment></b>
                <br/>Date: <b><Moment format='ddd MMM DD, YYYY'>{props.date}</Moment></b>

            </MDBCardBody>

        </MDBCard>

    )
}

// const mapStateToProps = (state) => {
//     return {
//
//     }
// }

const mapDispatchToProps = (dispatch) => {

    return {
        getMapCoordinates: (meetup) => {
            dispatch(getMeetupLatLng(meetup))
        }
    }
}
export default MeetupCard