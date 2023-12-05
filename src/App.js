import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './components/Footer';
function App() {
  return (
 
    <div className="App" >
     
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/contact' element={<Contact/>} />

      </Routes>
      <Footer/>
     
     </BrowserRouter>
      


      

    </div>

  );
}

export default App;
