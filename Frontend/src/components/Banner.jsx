import React from 'react'
import banner from '../../public/Banner.png'
const Banner = () => {
  return (
    <div className=' flex flex-col md:flex-row max-w-screen-2xl container mx-auto md:px-20 px-4 my-10'>
        <div  className='order-2 md:order-1 md:w-1/2 w-full mt-12 md:mt-32'>
          <div className='space-y-12 '>
            <h1 className='text-4xl font-bold '>Hello , Welcomes here to learn something <span className='text-pink-500'> new Everyday!!!</span></h1>
            <p className='text-xl '>
            Hello, and welcome! We're thrilled to have you here, where every day is an opportunity to learn something new and exciting. Whether you're looking to expand your knowledge, pick up a new skill, or simply satisfy your curiosity, you've come to the right place.
            </p>
          <label className="input input-bordered flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
          <input type="text" className="grow" placeholder="Email" />
        </label>
        </div>
        <button className='mt-6 btn btn-secondary'>Secondary</button>
        </div>
        <div className='order-1 w-full md:w-1/2  '>
          <img src={banner} className='w-92 h-92 ' alt="" />
        </div>
    </div>
  )
}

export default Banner