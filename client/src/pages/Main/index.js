import React, { useEffect } from 'react'

import NavBar from '../../layout/NavBar';
import "./main.css";

import App from '../../components/Spinner/Spinner';
// import Confetti from 'react-confetti'
// import useWindowSize from 'react-use/lib/useWindowSize'

function Auth() {
    // const { width, height } = useWindowSize()
    
    return (
        <>
        <div>
        <NavBar/>
        
        <App />
        
        
        {/* <Confetti
                width={width}
                height={height}
    /> */}
    
    </div>   
        </>
    )
}

export default Auth
