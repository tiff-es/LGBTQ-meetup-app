import React from "react";
import {Card} from "react-bootstrap";
import Moment from 'react-moment'
const MeetupCard = (props) => {

    return(

        <Card className='card'>
            <Card.Title className='header'><h3><b>{props.name}</b></h3></Card.Title>
            <Card.Subtitle className='header'><h6><b>{props.info}</b> </h6></Card.Subtitle>
            <Card.Body className='header'> Location: <b>{props.location}</b></Card.Body>
            <Card.Body className='body'>Start Time: <b><Moment date={props.time} format='hh:mm A'> </Moment></b>
                <br/>Date: <b><Moment format='ddd MMM DD, YYYY'>{props.date}</Moment></b>

            </Card.Body>

        </Card>

    )
}

export default MeetupCard