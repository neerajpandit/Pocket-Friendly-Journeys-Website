
// import './App.css';
import React from 'react';

import Navbar1 from './Navbar';
// import { Carousel } from 'react-bootstrap';
import Slide from './Crousel';
import Footer from './Footer';
import Places from './Places';
import Contact from './Contact';
import Blog from './Blog';
import Hotel from './Hotel';
import RestoRent from './Restorent';
import Testonomial from './Testonomial';
function Home() {
  return (
<>
<section id="topbar" class="d-flex align-items-center">
    <div class="container d-flex justify-content-center justify-content-md-between">
      <div class="contact-info d-flex align-items-center">
        <i class="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@example.com</a></i>
        <i class="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
      </div>
      <div class="social-links d-none d-md-flex align-items-center">
        <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
        <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
        <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
      </div>
    </div>
</section>

{/* <Navbar1/> */}
<Slide/>
<Testonomial/>
<Places/>
<Hotel/>
<RestoRent/>
{/* <Contact/> */}
{/* <Blog/> */}
{/* <Footer/> */}
    </>
  );
}

export default Home;
