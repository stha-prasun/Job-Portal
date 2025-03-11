import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarosule from './CategoryCarosule'
import LatestJobs from './LatestJobs'
import Footer from './shared/Footer'
import useGetAllJobs from '../hooks/useGetAllJobs'

const Home = () => {
  useGetAllJobs();
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <CategoryCarosule/>
      <LatestJobs/>
      <Footer/>
    </div>
  )
}

export default Home
