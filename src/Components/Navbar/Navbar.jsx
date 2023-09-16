import React from 'react'
import Toggle from '../Toggle/Toggle'
import{Link} from 'react-scroll'
import Logo from '../../image/logo.png'


const Navbar = () => {
  return (
    <div className='warper'>
        <div className='left'>
            <div className='name' id='sahil'><img src={Logo} alt="" /></div>
            <span id='tgl'><Toggle/></span>
        </div>
        <div className='right'>
            <ul className='list' >
              <Link spy={true} to='Navbar' smooth={true} >
                <li>home</li>
                </Link>
                <Link spy={true} to='Services' smooth={true} >
                <li>Services</li>
                </Link>
                <Link spy={true} to='Experiences' smooth={true} >
                <li>Experiences</li>
                </Link>
                <Link spy={true} to='Portfolio' smooth={true} >
                <li>Portfolio</li>
                </Link>
                <Link spy={true} to='Testimonial'smooth={true} >
                <li>Testimonial</li>
                </Link>
            </ul>
            <Link spy={true} to='Contact'smooth={true} >
            <button className='button navbarbtn'>contact me</button>
            </Link>
        </div>
      
    </div>
  )
}

export default Navbar
