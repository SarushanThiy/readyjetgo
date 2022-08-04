import React from 'react';
import { useSelector } from 'react-redux';
import Maps from '../../components/Map';
import { useNavigate } from 'react-router-dom';
import "./results.css";
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'

function Results() {
  const navigate = useNavigate()
  const place = useSelector(state => state.destination)
  const { width, height } = useWindowSize()
  
  return (
    <>
    
      <h1 className="locationResultTitle">{place}</h1>
      <h3 className="locationResultSolgan">"To travel is to live"</h3>
      <button className="backResultsBtn" onClick={()=>navigate('/home')}>Go Home</button>
      <div className="mapper" role='map' style={{width:'75%', height:'75%'}}>
          <Maps city={place}/>
      </div>
      <Confetti
                width={width}
                height={height}
    />
      
    </>
  )
}

export default Results
