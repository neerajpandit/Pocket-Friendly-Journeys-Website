import React from "react";
import './Team.css';
import hotel1 from '../img/place/hotel-1.jpg';
import hotel2 from '../img/place/hotel-2.jpg';
import hotel3 from '../img/place/hotel-3.webp';
function Hotel(){
    return(
        <>
    <section id="team" class="team">
<div class="container section-title" data-aos="fade-up">
  <h2>Hotels</h2>
  
</div>

<section id="blog" class="blog">

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row gy-4 posts-list">

          <div class="col-xl-4 col-lg-6">
            <article>

              <div class="post-img">
                <img src={hotel1} alt="" class="img-fluid"/>
              </div>

              <p class="post-category">Politics</p>

              <h2 class="title">
                <a href="blog-details.html">Dolorum optio tempore voluptas dignissimos</a>
              </h2>

              <div class="d-flex align-items-center">
                <img src={hotel2} alt="" class="img-fluid post-author-img flex-shrink-0"/>
                <div class="post-meta">
                  <p class="post-author">Maria Doe</p>
                  <p class="post-date">
                    <time datetime="2022-01-01">Jan 1, 2022</time>
                  </p>
                </div>
              </div>

            </article>
          </div>

          <div class="col-xl-4 col-lg-6">
            <article>

              <div class="post-img">
                <img src={hotel2} alt="" class="img-fluid"/>
              </div>

              <p class="post-category">Sports</p>

              <h2 class="title">
                <a href="blog-details.html">Nisi magni odit consequatur autem nulla dolorem</a>
              </h2>

              <div class="d-flex align-items-center">
                <img src="assets/img/place/hotel-1.jpg" alt="" class="img-fluid post-author-img flex-shrink-0"/>
                <div class="post-meta">
                  <p class="post-author">Allisa Mayer</p>
                  <p class="post-date">
                    <time datetime="2022-01-01">Jun 5, 2022</time>
                  </p>
                </div>
              </div>

            </article>
          </div>

          <div class="col-xl-4 col-lg-6">
            <article>

              <div class="post-img">
                <img src={hotel3} alt="" class="img-fluid"/>
              </div>

              <p class="post-category">Entertainment</p>

              <h2 class="title">
                <a href="blog-details.html">Possimus soluta ut id suscipit ea ut in quo quia et soluta</a>
              </h2>

              <div class="d-flex align-items-center">
                <img src="assets/img/blog/blog-author-3.jpg" alt="" class="img-fluid post-author-img flex-shrink-0"/>
                <div class="post-meta">
                  <p class="post-author">Mark Dower</p>
                  <p class="post-date">
                    <time datetime="2022-01-01">Jun 22, 2022</time>
                  </p>
                </div>
              </div>

            </article>
          </div>

        </div>
      </div>
    </section>



</section>
        </>
    );
}
export default Hotel;