import React, { Component } from 'react'

export class Map extends Component {
    render() {
        const address = "https://maps.google.com/maps?q=" + this.props.lat + "," + this.props.lon + "&hl=en&z=4&output=embed";
        const styling = {
            width: '100%',
            height: '200px'
        }

        return (
            <>
                <div className='mt-2'>
                    <iframe title='googleMap' src={address} style={styling}>
                    </iframe>
                </div>
            </>
        )
    }
}

export default Map