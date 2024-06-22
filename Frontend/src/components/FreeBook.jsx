import React, { useState , useEffect } from 'react'
// import List from '../../public/List.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';

const FreeBook = () => {
    const [book, setbook] = useState([])
    useEffect(()=>{
        const getbooks = async ()=>{
            try {
                const res = await axios.get('http://localhost:3002/book')
                setbook(res.data.filter((data)=> data.category === 'free'))
                console.log(res.data)
            } catch (error) {
                console.log("something error done" ,error)
            }
        }
        getbooks();
    },[])

    // const filterData = List.filter((data) => data.category === 'free');
    // console.log('ooy' , filterData)
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div>
            <h1 className='font-bold text-xl pb-2 '>Free offered Courses</h1>
            <p>These genres offer a variety of storytelling styles and themes, providing readers with a rich tapestry of experiences and adventures.</p>
            </div>
            
    <div> 
        <Slider {...settings}>
        {
        book.map((item)=>(
            <Cards item={item} key={item.id} />
        ))
        }
        </Slider>
    </div>        
</div>
    )
}

export default FreeBook;