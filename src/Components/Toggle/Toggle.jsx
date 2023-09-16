import React from 'react'
import '../../Components/Toggle/Toggle.css'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import { theameContext } from '../../Context'
import { useContext } from 'react'

const Toggle = () => {

    const theme = useContext(theameContext);
    const darkMode= theme.state.darkMode;
    const click = () =>{
        theme.dispatch({type:'toggle'})
    }
  return (
    <div className='toggle'  onClick={click}>
    <Moon/>
     <Sun/>
     <div className="togglebtn"  
    
     style={darkMode? {left:'2px'} : {right:'2px'}}>
         
     </div>
      
    </div>
  )
}

export default Toggle
