import React from 'react'
import '../../Components/Card/Card.css'

const Card = ({ details2,emoji,heading,details}) => {
  return (


    <div className='card'>
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{details}</span>
        <span>{details2}</span>
        <a href="https://www.techspot.com/"> <button className='cardbutton'>Learn More</button></a>

       
        
      
    </div>
    
  )
}

export default Card
