import React from "react";
import {Card} from "react-bootstrap";
import Moment from 'react-moment'
const MeetupCard = (props) => {

    return(

        <Card>
            <Card.Title className='title'><b>{props.name}</b></Card.Title>
            <Card.Header className='header'>Info: <b>{props.info}</b> </Card.Header>
            <Card.Body className='body'>Start Time: <b><Moment date={props.time} format='hh:mm A'> </Moment></b></Card.Body>
            <Card.Body className='body'>Date: <b><Moment format='ddd MMM DD, YYYY'>{props.date}</Moment></b></Card.Body>
        </Card>

    )
}

export default MeetupCard