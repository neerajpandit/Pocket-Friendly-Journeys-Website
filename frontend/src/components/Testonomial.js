import React from "react";
import './Testonomial.css';
import t1 from '../img/team/team-1.jpg';
import t2 from '../img/team/team-2.jpg';
function Testonomial() {
    return(
       
        <section id="testimonials">
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div class="col-md-12">
            {/* <h3 class="section-title">Testimonials</h3> */}
            <div class="section-title-divider"></div>
            
          </div>
        </div>

        <div class="row">
          <div class="col-md-3">
            <div class="profile">
              <div class="pic"><img src={t1} alt=""/></div>
              <h4>Dr Sadik Khan</h4>
              <span>Project Incharge</span>
            </div>
          </div>
          <div class="col-md-9">
            <div class="quote">
              <b><img src="assets/img/quote_sign_left.png" alt=""/></b> Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper. <small><img src="assets/img/quote_sign_right.png" alt=""/></small>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-9">
            <div class="quote">
              <b><img src="assets/img/quote_sign_left.png" alt=""/></b> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis architecto beatae. <small><img src="assets/img/quote_sign_right.png" alt=""/></small>
            </div>
          </div>
          <div class="col-md-3">
            <div class="profile">
              <div class="pic"><img src={t2} alt=""/></div>
              <h4>Er Priyanka Pande</h4>
              <span>Team Mentar</span>
            </div>
          </div>
        </div>

      </div>
    </section>
        
    );
    
}
export default Testonomial;