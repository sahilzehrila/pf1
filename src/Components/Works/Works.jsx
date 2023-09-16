import React from 'react'
import '../../Components/Works/Works.css'
import edit from '../../image/edit.png'
import js from '../../image/js.png'
import java from '../../image/java.png'
import bootstrap from '../../image/bootstrap.png'
import react from '../../image/physics.png'
import dev from '../../image/developer.png'
import { theameContext } from '../../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'
import document from '../../documentary/d1.pdf'







const Works = () => {
  const theme = useContext(theameContext);
  const darkMode = theme.state.darkMode;
  const transition = {duration:2, type:'spring'} 
  return (
    <div className='works' id='Experiences'>
       <div className='amezing' id='btom' >
        <span style={{color:darkMode? 'white' : ''}}>Frameworks</span>
        <span>I worked on </span>
        <spane>
        Frameworks like <br /> React <br />Bootstrap
        <br />Nodejs <br />
         Expressjs <br />
         MongoDB
      </spane>
        
           
       <a href={document} className='button s-button' id='btndnld' download>Documentry's </a>
              
       
                
        <div className='blur s-blur'> </div>
      </div>
         {/*right side wheel */}
              <div
              
              
              
              
              className='w-right'>

               <motion.div 
               
               initial={{rotate:120}}
              whileInView={{rotate:0}}
              viewport={{margin:'-40px'}}
              transition={{duration:2.5, type:'spring'}}
              
                 

               className='w-mainCircle'>

                <div className='w-secCircle' id='img1'>
                  <img src={dev} alt="" />
                </div>

                <div className='w-secCircle' id='img2'>
                  <img src={js} alt="" />
                </div>

                <div className='w-secCircle' id='img3'>
                  <img src={java} alt="" />
                </div>

                <div className='w-secCircle' id='img4'>
                  <img src={react} alt="" />
                </div>

                <div className='w-secCircle' id='img5'>
                  <img src={bootstrap} alt="" />
                </div>



               
                </motion.div>
                <div className='  backCircle1  ' id='c1'></div>
                <div className='   backCircle1 ' id='c2'></div>
                <div  className='  backCircle1  ' id='c3' ></div>
                </div>
              </div>
  )
}

export default Works
