import React from 'react'
import Map from './Map'
import Temperature from './Temperature'

export default function Card(props) {
    const { feels_like, temp, temp_min, temp_max } = props.data.main;
    const { lon, lat } = props.data.coord;
    return (
        <div className='card'>
            <div className='card-header bg-primary text-light'>
                <div className='text-light'>
                    <i className="fa fa-thermometer-three-quarters"></i>
                    <span className='h4 ms-2'>Davao City</span>
                </div>
            </div>
            <div className='card-body text-center'>
                <Temperature feelsLike={feels_like} temp={temp} minTemp={temp_min} maxTemp={temp_max} />
                <Map lon={lon} lat={lat} />
            </div>
        </div>
    )
}
