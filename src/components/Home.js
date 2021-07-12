import React from 'react'
import Hero from './Hero';
import Listing from './Listing';
import logo from './Content.jpg';

function Home() {
    return (
        <div className="Homepage">
            <Hero />
            <Listing title="Featured Movies" url="movies" />          
            <br />
            <Listing title="Featured Series" url="shows" />
            <br />
            <img alt='logo' style={{ width: '90%', margin:'50px' }} src={logo} />
            <br />
        </div>
    )
}

export default Home
