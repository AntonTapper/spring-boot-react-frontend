import React, {useState, useEffect} from 'react'
import HotelCard from './HotelCard/HotelCard';
import api from '@/services/api';
import { Carousel } from 'react-responsive-carousel';





const HotelList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await api.get('/hotels');
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data', error);
        } finally {
            setLoading(false);
          }
      };
      fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
      }

    return (
        <Carousel>
            {data.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel}/>
            ))}
        </Carousel>
    )
}

export default HotelList;
