import React, { useEffect, useState } from 'react'
import api from '@/services/api'


function MyComponent() {
    const [data, setData] = useState([]);

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await api.get('/hotels');
            setData(response.data);
        } catch(error) {
            console.error('Error fetching data', error)
        }
    }
    fetchData()
}, []);
return (
    <div>
        <h1>Data From Spring Boot:</h1>
        <ul className='ListTest'>
            {data.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>

    </div>
)

}
export default MyComponent