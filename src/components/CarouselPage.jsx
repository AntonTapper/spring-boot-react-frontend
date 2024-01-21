import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const CarouselPage = ({hotels}) => {

  return (
    <Carousel>
        {hotels.map((hotel) => {
          <div key={hotel.id} className='hotel-card'>
          <img src={`data:image/png;base64,${hotel.image}`} alt={hotel.name} className='hotel-image' />
          <div className='hotel-details'>
          </div>
        </div>
        })}
    </Carousel>
  )
}

export default CarouselPage