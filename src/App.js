import NavT from './components/NavT/NavT.js';
import NavB from './components/NavB/NavB.js';
import Story from './components/Story/Story.js';
import Services from './components/Services/Services.js';
import About from './components/About/About.js';
import Photos from './components/Photos/Photos.js';
import Contacts from './components/Contacts/Contacts.js';
import Reviews from './components/Reviews/Reviews.js';
import Footer from './components/Footer/Footer.js';
import './App.css';


const App = () => {
  return (
    <>
    <NavT />
    <NavB />
    <Story />
    <About />
    <div id="paslaugos" className='divH1'/>
    <Services />
    <div id="nuotraukos" className='divH2'/>
    <Photos />
    <Reviews />
    <div id="kontaktai"/>
    <Contacts />
    <Footer />
    </>
  );

}

export default App;
