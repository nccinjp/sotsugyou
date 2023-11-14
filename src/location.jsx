import Header from './header';   
import Footer_nav from './footer_nav.jsx';
import React from 'react';
// import Map from './map.jsx';
import SimpleExample from './maptest.jsx';

export default function location(){
    return (
        <>  
            <Header/>
            
            <h1>Location</h1>
            
            <div>
            {/* <Map/> */}
            <SimpleExample/>
            
            </div>
            
            <Footer_nav/>
        </>

    )
}

