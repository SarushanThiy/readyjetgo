import React from 'react';
import './random.css';

import RandomLocation from '../../components/RandomLocation/RandomLocation';
import NavBar from '../../layout/NavBar';

function Random() {
    
  return (
      
    <div className='App' role='randomiser'>
        {/* <NavBar /> */}
            
            
    
        <RandomLocation/>
    </div>
    
  )
}

export default Random
