import React, {useState, useEffect} from 'react'

  
  // HotelCard component
  const HotelCard = ({ hotel }) => {
    if (!hotel) {
      return <p>No hotel data available.</p>;
    }
    console.log(hotel.image, "aaaa")
    return (
      <div className='hotel-card'>
        <img src={`data:image/png;base64,${hotel.image}`} alt={hotel.name} className='hotel-image' />
        <div className='hotel-details'>
          {/* Additional content */}
        </div>
      </div>
    );
  };

export default HotelCard