import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Nav from './components/Navbar/Nav';
import Intro from './components/intro/Intro';
import Services from './components/services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import AboutUs from './components/Aboutus/AboutUs';
import Typewriter from "typewriter-effect";

function App() {

   
  return (
 
    <div className="App" >
    
      <Nav/>
      <Intro name="Vishal"/>
      <Services/>
      <Portfolio/>
      <AboutUs/>
      <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("GeeksForGeeks")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Welcomes You")
                        .start();
                }}
            />


    </div>

  );
}

export default App;
