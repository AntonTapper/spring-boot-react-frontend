import React from 'react';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';




const CarouselPage = () => {

  return (
    <Carousel>
        <div>
          <img src="https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg" alt="" />         
         <p className="legend">Legend 1</p>
       </div>
       <div>
       
            <img src="https://www.diplomathotel.com/wp-content/uploads/2022/11/marding3646-1.jpg"
  
            alt='Legend 2'
          />
         <p className="legend">Legend 2</p>
       </div>
       <div>
       <img
            src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/152709477.jpg?k=45b2ab4b9cbf195cbba9804af5006340998c80297f9a7b9cdac7453c585a1b9d&o=&hp=1"
            
            alt='Legend 3'
          />
         <p className="legend">Legend 3</p>
       </div>
    </Carousel>
  )
}

export default CarouselPage