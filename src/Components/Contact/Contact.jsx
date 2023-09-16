import React, { useState } from 'react'
import '../../Components/Contact/Contact.css'
import m1 from '../../image/m1.png'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { theameContext } from '../../Context'
import { useContext } from 'react'




const Contact = () => {



      const form = useRef();

      const[done,setDone] =  useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jhaet0g', 'template_gvciqt9', form.current, 'urgWLpFlwpNMwXKH7')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };
  const theme = useContext(theameContext);

  const darkMode = theme.state.darkMode;

  return (


  

    <div className='contact-form' id='Contact'>

        <div className='w-left'>
            <div className='amezing' id='contact'>
                <span style={{color:darkMode? 'white' : ''}}>Get in  touch</span>
                <span>Contact me</span>
                <div className='m1'><img src={m1} alt="" /></div>
                <div className='blur c-blur1' style={{background:"black"}}></div>

            </div>
        </div>
      <div className='c-right'>
        <form ref={form} onSubmit={sendEmail} >
            <input type="text" name='to_name' className='user'placeholder='Name' />
            <input type="email" name='from_name' className='user'placeholder='Email' />
            <textarea name='message' className='user' placeholder='Message'/>
            <input type="submit" value="Send" className='button' />
            <span>{done && "Thanks for contacting me"}</span>

            <div className='blur c-blur'  style={{background:"orange"}}></div>

        </form>
      </div>
    </div>
  )
}

export default Contact
