import React from 'react';
import './Home.css';
// import Navbar from '../components/Navbar';
// import { Link } from 'react-router-dom';
// import tourism_video from '../assests/tourism_video.mp4';
// import Layout from '../hocs/Layout';
// import Navbar from '../components/Navbar';
import Crousel from '../components/Crousel';
import Places from '../components/Places';
import Hotel from '../components/Hotel';
import Testonomial from '../components/Testonomial';
import Contact from '../components/Contact';

const Home = () => (
    <>
    {/* <Navbar/> */}
    <Crousel/>
    
    <Places/>
    <Hotel/>
    <Testonomial/>
    <Contact/>
   

   
   
    </>
);

export default Home;
