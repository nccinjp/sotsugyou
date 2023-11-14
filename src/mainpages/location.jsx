import Header from '../headerandbottom/header.jsx';   
import Footer_nav from '../headerandbottom/footer_nav.jsx';
import React from 'react';
import SimpleExample from './maptest.jsx';
import EventsExample from './maptest2.jsx';
import '../css/pages.css';

export default function location(){
    return (
        <>  
            <Header/>
            <h1 className='label'>Location</h1>
            
            {/* <div className='container'>
            <p>Simple</p>
            <SimpleExample/>
            </div> */}

            <div className='container'>
            自分、今現在地<br/>
            <EventsExample/>
            </div>

            <div>
            <p>pet の ibasyo</p>
            </div>
            
            
            
            <Footer_nav/>
        </>

    )
}

