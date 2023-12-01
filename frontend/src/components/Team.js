import React from "react";
import t1 from '../img/team/team-1.jpg';
import t2 from '../img/team/team-2.jpg';
import t3 from '../img/team/team-3.jpg';
import t4 from '../img/team/team-4.jpg';
import './Team.css';
function Team(){
    return(
        <>
                <section id="team" class="team">


<div class="container section-title" data-aos="fade-up">
  <h2>Team</h2>
  <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
</div>

<div class="container">

  <div class="row gy-5">

    <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="100">
      <div class="member-img">
        <img src={t1} class="img-fluid" alt=""/>
        <div class="social">
          <a href="#"><i class="bi bi-twitter"></i></a>
          <a href="#"><i class="bi bi-facebook"></i></a>
          <a href="#"><i class="bi bi-instagram"></i></a>
          <a href="#"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
      <div class="member-info text-center">
        <h4>Neeraj Pandey</h4>
        {/* <span>Chief Executive Officer</span> */}
        <p>Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow</p>
      </div>
    </div>

    <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="200">
      <div class="member-img">
        <img src={t2} class="img-fluid" alt=""/>
        <div class="social">
          <a href="#"><i class="bi bi-twitter"></i></a>
          <a href="#"><i class="bi bi-facebook"></i></a>
          <a href="#"><i class="bi bi-instagram"></i></a>
          <a href="#"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
      <div class="member-info text-center">
        <h4>Amit Sharma</h4>
        {/* <span>Product Manager</span> */}
        <p>Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut</p>
      </div>
    </div>

    <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="300">
      <div class="member-img">
        <img src={t3} class="img-fluid" alt=""/>
        <div class="social">
          <a href="#"><i class="bi bi-twitter"></i></a>
          <a href="#"><i class="bi bi-facebook"></i></a>
          <a href="#"><i class="bi bi-instagram"></i></a>
          <a href="#"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
      <div class="member-info text-center">
        <h4>Amit Kumar Rajpoot</h4>
        {/* <span>CTO</span> */}
        <p>Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui</p>
      </div>
    </div>

    <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="400">
      <div class="member-img">
        <img src={t4} class="img-fluid" alt=""/>
        <div class="social">
          <a href="#"><i class="bi bi-twitter"></i></a>
          <a href="#"><i class="bi bi-facebook"></i></a>
          <a href="#"><i class="bi bi-instagram"></i></a>
          <a href="#"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
      <div class="member-info text-center">
        <h4>Harsh Gupta</h4>
        {/* <span>Accountant</span> */}
        <p>Magni voluptatem accusamus assumenda cum nisi aut qui dolorem voluptate sed et veniam quasi quam consectetur</p>
      </div>
    </div>

    <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="500">
      <div class="member-img">
        <img src={t1} class="img-fluid" alt=""/>
        <div class="social">
          <a href="#"><i class="bi bi-twitter"></i></a>
          <a href="#"><i class="bi bi-facebook"></i></a>
          <a href="#"><i class="bi bi-instagram"></i></a>
          <a href="#"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
      <div class="member-info text-center">
        <h4>Omveer Tyagi</h4>
        {/* <span>Marketing</span> */}
        <p>Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit</p>
      </div>
    </div>

    {/* <div class="col-lg-4 col-md-6 member" data-aos="fade-up" data-aos-delay="600">
      <div class="member-img">
        <img src={t2} class="img-fluid" alt=""/>
        <div class="social">
          <a href="#"><i class="bi bi-twitter"></i></a>
          <a href="#"><i class="bi bi-facebook"></i></a>
          <a href="#"><i class="bi bi-instagram"></i></a>
          <a href="#"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
      <div class="member-info text-center">
        <h4>Josepha Palas</h4>
        <span>Operation</span>
        <p>Sint sint eveniet explicabo amet consequatur nesciunt error enim rerum earum et omnis fugit eligendi cupiditate vel</p>
      </div>
    </div> */}

  </div>

</div>

</section>
        </>
    );
}
export default Team;