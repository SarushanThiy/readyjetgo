import React, { useEffect } from 'react'
import NavBar from '../../layout/NavBar';
import "./home.css"
import Carousel from "react-elastic-carousel"
import Card from '../../components/Card/Card'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

function Home() {
  const navigate = useNavigate()
  const user = useSelector(state => state.username)

  useEffect(() => {
    (
      async () => {
        if (!localStorage.getItem('jwt')) {
          localStorage.clear()
          navigate('/login')
        } else {
          const token = localStorage.getItem('jwt')
          const options = {
            method: 'POST',
            body: JSON.stringify({ token: token }),
            headers: { 'Content-Type': 'application/json' }
          }
          const response = await fetch('https://readyjetgoserve.herokuapp.com/api/auth/', options)
          if (response.status === 500) {
            localStorage.clear()
            navigate('/login')
          }
        }
      }
    )
      ()
  }, [])

  const breakPoints = [
    { width: 400, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
    { width: 1500, itemsToShow: 4 }
  ]
  return (
    <>
      <NavBar  />
      <div className="Home"
        role="Home">
        <h1 className="homeTitle">Welcome {user}</h1>
        </div>
        <div className='boxContainer'>
        <div className="carousel">
        <Carousel className="carousel1" breakPoints={breakPoints}>
          
          <Card text="Review 1"/>
          <Card text="Review 2"/>
          <Card text="Review 3"/>
          <Card text="Review 4"/>
          <Card text="Review 5"/>
          <Card text="Review 6"/>
          <Card text="Review 7"/>
        </Carousel>
        </div>

        
        <button className="randomButton" data-testid='quizbtn' role='main' onClick={() => navigate('/random')}>Random Destination</button>
        <button className="chatButton" data-testid='quizbtn' role='main' onClick={() => navigate('/chat')}>Chat Now</button>
            <button className="quizButton" data-testid='quizbtn' role='main' onClick={() => navigate('/quiz')}>Find me a holiday</button>
            
      </div>

    </>
  );
}

export default Home;
