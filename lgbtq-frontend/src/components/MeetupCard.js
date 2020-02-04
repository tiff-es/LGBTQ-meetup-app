import React from "react";
import {Card} from "react-bootstrap";

const MeetupCard = (props) => {

    return(

        <Card>
            {props.info}
        </Card>

    )
}

export default MeetupCard