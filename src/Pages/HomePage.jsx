import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Classes from '../Components/Classes'
import Schedules from '../components/Schedules'
import Begin from '../components/Begin'
import Trainers from '../components/Trainers'
import Contact from '../components/Contact'
import PageTitle from '../components/PageTitle'


const HomePage = () => {
  return (
    
    <>
     <PageTitle title="Home"/>
    <HeroSection/>
    <About/>
    <Begin/>
    <Classes/>
    <Schedules/>
    <Trainers/>
    <Contact/>
    </>
   

  )
}

export default HomePage