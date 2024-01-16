import React, { useState } from 'react'
import './HomePage.css'

const HomePage = () => {

  const [searchQuery, setSearchQuery] = useState([])

  //FIXA HÄMTNING AV HOTEL
  const handleSearch = (query) => {
    setSearchQuery(query);
    
  }

  return (<>
    <div>
      {/* Hero Section */}
      <div className='hero-section'>
        <h1>Your Perfect Stay Awaits</h1>
        {/* SearchBar */}
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