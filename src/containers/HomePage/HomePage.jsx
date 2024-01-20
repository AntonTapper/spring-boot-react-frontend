import React, { useState } from 'react'
import './HomePage.css'
import SearchBar from '../../components/SearchBar/SearchBar'
import HeroSection from '@/components/HeroSection/HeroSection'
import HotelCard from '@/components/HotelCard/HotelCard'
import HotelList from '@/components/HotelList'

const HomePage = () => {

  return (<>
    <div className='home-page'>
        <section className='welcome-section'>
            <h2>Welcome to My Hotel Booking App</h2>
            <p>Discover hotels all around the world!</p>
        </section>
    </div>
    <div>
      <HeroSection></HeroSection>
      <div className='hero-section'>
        {/* <SearchBar onSearch={handleSearch}/> */}
        <HotelList></HotelList>
      </div>
    </div>
      
    
    </>)
}

export default HomePage