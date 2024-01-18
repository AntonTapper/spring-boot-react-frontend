import React, { useState } from 'react'
import './HomePage.css'
import SearchBar from '../../components/SearchBar/SearchBar'
import HeroSection from '@/components/HeroSection/HeroSection'
import HotelCard from '@/components/HotelCard/HotelCard'

const HomePage = () => {

  const [searchQuery, setSearchQuery] = useState([])

  //FIXA HÄMTNING AV HOTEL
  const handleSearch = (query) => {
    setSearchQuery(query);
    
  }

  return (<>
    <div>
      {/* <HeroSection></HeroSection> */}
      <div className='hero-section'>
        {/* <SearchBar onSearch={handleSearch}/> */}
        <HotelCard></HotelCard>
      </div>
    </div>
      
    <div className='home-page'>
        {/* <HotelSlider/> */}
        <section className='welcome-section'>
            <h2>Welcome to My Hotel Booking App</h2>
            <p>Discover hotels all around the world!</p>
        </section>
    </div>
    </>)
}

export default HomePage