import React from 'react'
import Navbar from './shared/Navbar'
import Job from './Job';

const randomJobs = [1,2,3];

const Browse = () => {
  return (
    <div className='max-w-7xl mx-auto my-10'>
      <Navbar/>
      <div>
        <h1 className='font-bold text-xl my-10'>Search Results ({randomJobs.length})</h1>
        <div className='grid grid-cols-3 gap-10'>
        {
            randomJobs.map((item,index)=>(
                <Job />
            ))
        }
        </div>
      </div>
    </div>
  )
}

export default Browse
