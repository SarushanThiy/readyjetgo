import React, {useState} from "react";
import "./random.css"
import { useNavigate } from 'react-router-dom';

const RandomLocation = () => {
    const navigate = useNavigate()
    const [locations, setLocations] = useState('')
    
    const getLocation = () => {
        fetch("https://holidaylocatapi.herokuapp.com/locations")
        .then(res => res.json())
        .then(data => {
            let randomLocation = Math.floor(Math.random() * data.length);
            setLocations(data[randomLocation]);
        });
    };


    return (
        <>
        
        {/* <div className="qouteBox">
        <h1>"Pack your bags we are going travelling"</h1>
        </div> */}
        
        
        
        <div className="randomContainer" >
        <button className="backRandomButton" id="randloc" onClick={()=>navigate('/home')}>Return   <br></br>Home</button>
        <button className='hidden' id="randomButton" onClick={getLocation}>Random Location</button>
        
            
        {locations?
        <div className="hidden1" role='hiddenbtn' test-dataid='randombtn'>
            <p id="locationName">{locations.Name}</p>
            <img className="randomimg"src={locations.Img}></img>
        </div>:<div></div>}
        
        
        </div>
        <div>
        
        </div>
        
        
        </>

    )
};


export default RandomLocation
