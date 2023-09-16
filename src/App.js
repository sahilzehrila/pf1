
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import './Components/Navbar/Navbar.css';
import Intro  from '../src/Components/intro/Intro';
import '../src/Components/intro/Intro.css';
import Works from '../src/Components/Works/Works';
import Services from '../src/Components/Services/Services';
import Project from '../src/Components/Projects/Project';
import Reviews from './Components/Reviwes/Reviews';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { theameContext } from './Context';
import { useContext } from 'react';


function App() {

  const theme = useContext(theameContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    
    style={{background: darkMode? 'black': '',
    color:darkMode? 'white':''}}>
     <Navbar/>
    <Intro/>
     <Services/>
     <Works/>
     <Project/>
     <Reviews/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
