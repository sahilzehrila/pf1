import React from 'react'
import Github from '../../image/github.png'
import Linkedin from '../../image/linkedin.png'
import Instagram from '../../image/instagram.png'
import gg from '../../image/anime.png-removebg-preview.png'
import v1 from '../../image/Vector1.png'
import v2 from '../../image/Vector2.png'
import crown from'../../image/crown.png'
import glass from '../../image/3d.png'
import thup from '../../image/real.png'
import model from'../../image/glassesimoji.png'
import FloatingDiv from '../fd/FloatingDiv'
import { theameContext } from '../../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'
import{Link} from 'react-scroll'
import Lithub from '@iconscout/react-unicons/icons/uil-github'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Linkdin from '@iconscout/react-unicons/icons/uil-linkedin'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'

const Intro = () => {


  const transition = {duration:2, type:'spring'} 


  const theme = useContext(theameContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='intro'>
      <div className='i-left'>
        <div className='i-name'>
          <span style={{color:darkMode? 'white' : ''}}>Hy! I Am</span>
          <span>Sahil Sahoo</span>
          <span style={{color:darkMode? 'white' : ''}}>"Web developers weave the digital tapestry of the modern world, <br /> shaping experiences with lines of code. <br /> Each click, each interaction, a testament to their craftsmanship. <br /> In a world driven by technology, <br /> they are the architects of the internet's future.".</span>
        </div>
        <Link spy={true} to='Contact'smooth={true} >
         <button className=' i-button'>Hire me</button>
         </Link>
      
      </div>
      <div className='i-right'>

        <img src={v1} alt="" />
        <img src={v2} alt="" />
        <img  id='gg' src={gg} alt="" />
        <motion.img 
        
        initial={{left:'39%'}}
        whileInView={{left:'36%'}}
        transition={transition}
       id='glass'
        src={glass} alt="" />
        
        
        <motion.img 
        
        initial={{left:'-36%'}}
        whileInView={{left:'-12%'}}
        transition={transition}
        
        src={model} alt="" />
        <motion.div 
        
        initial={{top:'-4%' , left:'7%'}}
          whileInView={{left:'-1%'}}
        transition={transition}
        className='floating-div'
        
        >
            <FloatingDiv image={thup} txt1={"web"} txt2={"develeloper"} />

        </motion.div>

        <motion.div
        
        initial={{  left:'-37%'}}
        whileInView={{left:'-60%'}}
      transition={transition}
      id='crown'
        className='floating-div'
        style={{top:'18rem' , left:'-650px' , right:'60px' }}>  <FloatingDiv image={crown} txt1={"great"} txt2={"designer"} /></motion.div>
          
       
        <div>
          
        </div>

        {/* blur colour divs */}

          <div className='blur'></div>
          <div className='blur2'></div>
      </div>

      <div className='i-icons'>
         <a href="https://github.com/sahilzehrila"><Lithub color="orange" size='8.5rem' /></a>
          <a href="https://www.linkedin.com/in/sahil-sahoo-9634a3240">   <Linkdin color="orange" size='8.5rem'/></a>
        
         <a href="https://www.instagram.com/the_anonymous_gamer_/?igshid=MzNlNGNkZWQ4Mg%3D%3D">  <Insta color="orange" size='8.5rem'/></a>
          
          
         </div>
    </div>
  )
}

export default Intro
