import React, { useState, useEffect } from 'react'
import Card from '../components/Card';

export default function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const apiKey = process.env.REACT_APP_API_KEY;
        // Define the API URL you want to fetch data from
        const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Davao&appid=' + apiKey + '&units=metric';

        // Use the fetch API to make the GET request
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                // Update state with the fetched data
                setData(data);
                setLoading(false); // Set loading to false once data is fetched
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false); // Set loading to false in case of an error
            });
    }, []); // Empty dependency array to run this effect only once when the component mounts

    return (
        <>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-md-12 d-flex justify-content-center'>
                        {loading ? <p className='h4'>Loading ... </p> : <Card data={data} />}
                    </div>
                </div>
            </div>
        </>
    );
}
