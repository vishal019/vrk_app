import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Nav from './components/Navbar/Nav';
import Intro from './components/intro/Intro';
import Services from './components/services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import AboutUs from './components/Aboutus/AboutUs';
import Contactus from './components/Contactus/Contactus';
import F from './components/footer';
import ContactMe from './components/contact/ContactMe';

function App() {



   
  return (
 
    <div className="App" >


      
    
      <Nav/>
      <Intro name="Vishal"/>
      {/* <Services/> */}
      <Portfolio/>
      <AboutUs/>
      <Contactus/>
      {/* <ContactMe/> */}
      {/* <F/> */}
  

      


    </div>

  );
}

export default App;
