import React, {useState, useEffect} from 'react'
import '../HotelCard/HotelCard.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

  
  // HotelCard component
  const HotelCard = ({ hotel }) => {
    if (!hotel) {
      return <p>No hotel data available.</p>;
    }
    return (
      <div className='hotel-card'>
        <img src={`data:image/png;base64,${hotel.image}`} alt={hotel.name} className='hotel-image' />
        <p>{hotel.name}</p>
        <div className='hotel-details'>
        </div>
      </div>
    );
  };

export default HotelCard