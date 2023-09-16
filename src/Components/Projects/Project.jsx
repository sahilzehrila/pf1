import React from 'react'
import '../Projects/Project.css'
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Ecom from "../../image/chatbot.png"
import slid from "../../image/ecom.webp"
import hoc from "../../image/portfolio.jpg"
import Music from "../../image/weather.jpg"
import { theameContext } from '../../Context'
import { useContext } from 'react'


const Project = () => {
    const theme = useContext(theameContext);
    const darkMode = theme.state.darkMode;
  return (
  
    <div className="Portfolio" id='Portfolio'>
        {/*heading */}
        <span>Recent Projects</span>
        <span  id='textt' style={{color:darkMode? 'white' : ''}}>Web APPs</span>


        {/*slider Section */}
       <Swiper spaceBetween={95} slidesPerView={3}
       grabCursor={true}
       className='Portfolio-slider'>

        <SwiperSlide>
            <a href=""><img src={slid} alt="" /></a>
            
        </SwiperSlide>
          
        <SwiperSlide>
            <a href="">  <img src={Ecom} alt="" /></a>
          
        </SwiperSlide>{" "}
          
        <SwiperSlide>
            <a href=""> <img src={Music} alt="" /></a>
           
        </SwiperSlide>
        <SwiperSlide>
            <a href=""> <img src={hoc} alt="" /></a>
           
        </SwiperSlide>

       </Swiper>
    </div>
    
  )
}

export default Project
