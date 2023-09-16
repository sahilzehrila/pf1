import React from 'react'
import '../../Components/Footer/Footer.css'
import wave from '../../image/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Linkdin from '@iconscout/react-unicons/icons/uil-linkedin'

const Footer = () => {
  return (
    <div className='Footer'>

      <img src={wave} alt='' style={{width: '100%'}} />
      <div className='F-content'>
        <span>sahilsahoo68@gmail.com</span>
        <div className='F-icons'>

          <a href="https://www.facebook.com/profile.php?id=100009407690372"> <Facebook color="white" size='3rem'/></a>
          <a href="https://www.instagram.com/the_anonymous_gamer_/?igshid=MzNlNGNkZWQ4Mg%3D%3D">  <Insta color="white" size='3rem'/></a>
         <a href="https://github.com/sahilzehrila"><Github color="white" size='3rem' /></a>
           <a href="https://www.linkedin.com/in/sahil-sahoo-9634a3240">   <Linkdin color="white" size='3rem'/></a>
        
        </div>
      </div>
    </div>
  )
}

export default Footer
