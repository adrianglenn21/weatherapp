import React from 'react'

export default function Temperature(props) {
    const {temp, feelsLike, minTemp, maxTemp} = props;
    return (
        <>
            <p className='h1'><strong>{temp}</strong>°C</p>
            <span className='fs-6'>Feels like: {feelsLike}</span>
            <br />
            <span className='fs-6'>Min: {minTemp}</span>
            <span className='my-1'> | </span>
            <span className='fs-6'>Max: {maxTemp}</span>
        </>
    )
}
