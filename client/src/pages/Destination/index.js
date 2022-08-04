import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './destination.css'

function Destination() {
    const dispatch =  useDispatch()
    const navigate = useNavigate()
    const ans = useSelector(state => state.answers)
    const [destinations, setDestinations] = useState([])
   
    let filtered = []
    let finalList = []

    const random_int = (list)=> {
        for (let i = list.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (list.length));
            [list[i], list[j]] = [list[j], list[i]];
        }
    }
    useEffect(() => {
        axios.get('https://holidaylocatapi.herokuapp.com/locations')
        .then(resp => setDestinations(resp.data.map(d => d))) 
        
    }, [])
    const filter =()=>{
        for (let i=0; i< destinations.length; i++){
        // console.log(destinations[i])
            if (destinations[i].Continent === ans.ans2){
            // console.log(destinations[i])
                if(destinations[i].cityBeach === ans.ans1){
                    console.log(destinations[i])
                    let dest = destinations[i]
                    console.log('a', dest)
                    filtered.push(destinations[i])
                }
            }
        }
        final()
    }
    console.log(destinations)
    const final = () =>{
        random_int(filtered)
        console.log(filtered)
        finalList.push(filtered.slice(0,3))
        console.log(finalList)
        } 
    console.log(ans)
    if (destinations){
        filter()
    }

    const add_dest = (obj => async(dispatch)=>{
        dispatch({
            type: "ADD_DEST",
            value: obj
        })
    })

    const handleClick=(e)=>{
        let dest = e.target.alt
        console.log(dest)
        for(let i=0; i<finalList[0].length;i++){
            if (finalList[0][i].Name === dest){
                dest = `${finalList[0][i].Name} ${finalList[0][i].Country}`
                console.log(dest)
            }
        }
        dispatch(add_dest(dest))
        navigate('/result')
    }

    const places = (list) =>{
        return list[0].map((p, index) => <div key={index}>
            <h1 className="h1Des">{p.Name}, {p.Country}</h1>
            <img className="imgDes"alt={p.Name} onClick={(e)=>handleClick(e)} src={p.Img}></img>
        </div>)
    }

  return (
    <div>
        <h1 id="optionsTitle">Here Are  Your Destination Options!</h1>
        <p id="clickTitle">Click Your Desired Destination to Start Your Travels...</p>
        {finalList?<div id='placesDiv'>{places(finalList)}</div>:<h4>Loading</h4>}
    </div>
  )
}

export default Destination
