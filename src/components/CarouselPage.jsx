import React from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import hotel1 from '../assets/Hotel1.jpg'
import hotel2 from '../assets/Hotel2.jpg'
import hotel3 from '../assets/Hotel3.jpg'




const CarouselPage = ({hotels}) => {

  return (
    <Carousel>
      
        {hotels.map((hotel) => {
          <div key={hotel.id} className='hotel-card'>
          <img src={`data:image/png;base64,${hotel.image}`} alt={hotel.name} className='hotel-image' />
          <div className='hotel-details'>
            {/* Additional content */}
          </div>
        </div>
        })}
        {/* <Image
          src={hotel1}
          alt="Picture of the author"
          width={50}
          height={50}
        />
        <p className="legend">Legend 1</p>
      </div>
      <div>

        <Image
          src={hotel2}
          alt="Picture of the author"
          width={50}
          height={50}
        />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <Image
          src={hotel3}
          alt="Picture of the author"
          width={50}
          height={50}
        />
        <p className="legend">Legend 3</p>
       </div> */}
    </Carousel>
  )
}

export default CarouselPage