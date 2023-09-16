import React from 'react';
import '../../Components/Reviwes/Review.css';
import {Swiper , SwiperSlide} from 'swiper/react';
import 'swiper/css';
import '../../Components/Reviwes/Review.css'
import 'swiper/css/pagination'
import p1 from '../../image/profile1.jpg';
import p2 from '../../image/profile2.jpg';
import p3 from '../../image/profile3.jpg';
import p4 from '../../image/profile4.jpg';











const Reviews = () => {


   const reviews = [
          
    {
      img:p1,
      reviews:"best WebDeveloper "
    },
    {
      img:p2,
      reviews:"Greate services and features"
    },
    {
      img:p3,
      reviews:"such a great team player"
    },
    {
      img:p4,
      reviews:"thank you for bulding my website"
    }
   ]




  return (
    <div className='R-warp' id='Testimonial'>
        <div className='R-heading'>
            <span>Review's</span>
            <span>&</span>
            <span>Feedback's</span>


        </div>
       
       {/* slder */}
   <Swiper
   
  
   slidesPerView={2}
   pagination = {{clickable: true }}
   
   >
    
              {reviews.map((reviews,index)=>{
                return(
                  <SwiperSlide key={index}>
                    <div className='reviews'>
                    <img src={reviews.img} alt="" />
                    <span>{reviews.reviews}</span>
                    </div>
                    
                  </SwiperSlide>
                )
              })}



   </Swiper>

    </div>
  )
}

export default Reviews
