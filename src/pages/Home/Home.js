import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import JoinNow from './components/JoinNow/JoinNow'
import NowShowing from './components/NowShowing/NowShowing'
import UpcomingMovies from './components/UpcomingMovies/UpcomingMovies'

const Home = () => {
  return (<>
    <Navbar/>
    <Banner/>
    <NowShowing/>
    <UpcomingMovies/>
    <JoinNow/>
    <Footer/>
    


  </>  
  )
}

export default Home