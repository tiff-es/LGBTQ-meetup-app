import React from "react";
import axios from 'axios'
import {connect} from 'react-redux'
import {addMeetup, updateMeetup, getCategories} from "../actions/meetup";
import {Form, ButtonGroup, FormCheck} from "react-bootstrap";
import Button from "@material-ui/core/Button";
// import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";

class CreateMeetup extends React.Component{
    // state = {
    //     categories: [1,2,3]
    // }

    handleInputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    postMeetup = (newMeetup) => {
        axios.post('http://localhost:3000/api/meetups', {newMeetup: newMeetup})
            .then(response => {
                this.props.addMeetup(response.data)
            })
            .catch(e => console.warn(e))
    }
    handleOnSubmit = (event) => {
        event.preventDefault()
        this.postMeetup(this.state)
        this.props.addMeetup(this.state)
    }

     axiosGetCategories = (categories) =>
    {
        axios.get('http://localhost:3000/api/categories')
            .then(response => {
                this.props.getCategories(response.data)
            })
            .catch(e => console.log(e))
    }
    componentDidMount() {
     this.axiosGetCategories()
    }

    render(){
        return(

            //         <div class='card-body'>
            //             Location: {meetup.location}
            //             Time: {meetup.time}
            //             Date: {meetup.date}
            //             Category: {meetup.category}
            //             Info: {meetup.info}

            <div id='create-meetup main-container' className='modal-body'>
                <h2  id='create-meetup header 'className='header-raised'>Create A New Meetup</h2>
                <Form id='create-meetup form' onSubmit={this.handleOnSubmit}>

                    <Form.Group id='create-meetup form-group location'onChange={this.handleInputChange} controlId="formBasicUsername">
                        <Form.Label id='create-meetup form-label location'>Location</Form.Label>
                        <Form.Control id='location' type="text" placeholder="Choose Location" />
                    </Form.Group>

                    <Form.Group id='create-meetup form-group time'onChange={this.handleInputChange}>
                        <Form.Label id='create-meetup form-label time'>Time</Form.Label>
                        <Form.Control id='time' type="text" placeholder="Choose Time" />
                    </Form.Group>

                    <Form.Group id='create-meetup form-group date'onChange={this.handleInputChange}>
                    <Form.Label id='create-meetup form-label date'>Date</Form.Label>
                    <Form.Control id='date' type="text" placeholder="Choose Date" />
                </Form.Group>

                    <Form.Group id='create-meetup form-group info'onChange={this.handleInputChange}>
                        <Form.Label id='create-meetup form-label category'>Event Category:</Form.Label>
                        <br/>

                        <Form.Check  inline label='Lesbian' type='radio' id='category' value='Lesbian'/>
                        <Form.Check  inline label='Gay' type='radio' id='category' value='Gay'/>
                        <Form.Check  inline label='Transgender/Genderqueer' type='radio' id='category' value='Transgender/Genderqueer'/>
                    </Form.Group>

                    <Form.Group id='create-meetup form-group info'onChange={this.handleInputChange}>
                        <Form.Label id='create-meetup form-label info'>Meetup Info</Form.Label>
                        <Form.Control id='info' type="text" placeholder="Meetup Info" />
                    </Form.Group>

                    <Button id='create-meetup submit-btn' variant='primary' className='submitButton' action={addMeetup()} type="submit"> Submit </Button>

                </Form>
            </div>
        )
    }


}


const mapStateToProps = (state) => {
    return{
        newMeetup: state.newMeetup,
        categories: state.categories

    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addMeetup: (newMeetup) => {
            dispatch(addMeetup(newMeetup))
        },
        getCategories: (categories) => {
            dispatch(getCategories(categories))

        }
     }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateMeetup)