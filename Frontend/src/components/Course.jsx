import React, { useEffect, useState } from 'react'
import Cards from './Cards'
// import list from '../../public/List.json'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Course = () => {
    const [book , setBook] = useState([])
    useEffect(()=>{
        const getBook = async()=>{
            try {
             const res = await axios.get('http://localhost:3002/book')
             console.log(res.data)
             setBook(res.data)
            } catch (error) {
                console.log(error)
            }
        } 
        getBook();
    },[])
  return (
    <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4 mt-[4.2rem] dark:bg-slate-900 dark:text-white'>
        <div className='dark:bg-slate-900 dark:text-white items-center justify-center text-center '>
        <h1 className='text-2xl  md:text-4xl'>
        We're delighted to have you 
        <span className='text-pink-500'> Here! :)</span>
        </h1>
        <p className='mt-12 '>
        Hello and welcome! We are delighted to have you here. At Your Bookstore, we believe in the transformative power of books. Whether you’re looking to escape into a world of fiction, gain new insights from non-fiction, or find inspiration from biographies, we have something for everyone 
        </p>
        <Link to="/">
        <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
        </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3 '>
            {
              book.map((item)=>(
                <Cards item = {item} key = {item.id}/>
              ))  
            }
        </div>
    </div>
  )
}

export default Course