import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import React from "react";
import {connect} from "react-redux";
import {axiosGetUsers} from "../actions/user";
import {getMapDefault} from "../actions/meetup";



class MapComponent extends React.Component {
// state = {
//     height: '50vh',
//     width: '50vw'
// }
componentDidMount() {
    this.props.getMapDefault()
    // this.setState({
    //     height: this.props.map.height,
    //     width: this.props.map.width
    // })
}

    render() {
        return (
            <Map


                                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    height: this.props.map.height,
                    width: this.props.map.width
                }}
            >

                <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                    <Feature coordinates={[this.props.map.lon, this.props.map.lat]} />
                </Layer>
            </Map>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        map: state.meetups.map
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMapDefault: (mapParams) => {
            dispatch(getMapDefault(mapParams))
        }
    }
}

const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoidGlmZmFueWFicmFoYW0iLCJhIjoiY2s1N2x6MnRpMDU3MjNscHMxdGRhcTZ6NiJ9.7D9NUZEVIS2O86VocLUXPQ\n.p6GGlfyV-WksaDV_KdN27A"})


export default connect( mapStateToProps,mapDispatchToProps)(MapComponent)
