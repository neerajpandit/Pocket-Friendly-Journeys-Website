import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import histo1 from '../img/place/histo-1.jpg';
import histo2 from '../img/place/histo-2.jpg';
import histo3 from '../img/place/histo-3.webp';
function Places() {
  return (
    <>
    <section id="team" class="team">
<div class="container section-title" data-aos="fade-up">
  <h2>Historical Places</h2>
  <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
</div>

<section id="blog" class="blog">

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row gy-4 posts-list">

          {/* <div class="col-xl-4 col-lg-6">
            <article>

              <div class="post-img">
                <img src="assets/img/blog/blog-1.jpg" alt="" class="img-fluid"/>
              </div>

              <p class="post-category">Politics</p>

              <h2 class="title">
                <a href="blog-details.html">Dolorum optio tempore voluptas dignissimos</a>
              </h2>

              <div class="d-flex align-items-center">
                <img src="assets/img/blog/blog-author.jpg" alt="" class="img-fluid post-author-img flex-shrink-0"/>
                <div class="post-meta">
                  <p class="post-author">Maria Doe</p>
                  <p class="post-date">
                    <time datetime="2022-01-01">Jan 1, 2022</time>
                  </p>
                </div>
              </div>

            </article>
          </div> */}

          <div class="col-xl-4 col-lg-6">
            <article>
            <div class="col-xl-4 col-lg-6" style={{ marginLeft:'50px'}}>
              <Card style={{ width: '23rem' }}>
                <Card.Img variant="top" src={histo1} style={{ width: '23rem',height:'300px' }} />
                <Card.Body>
                  <Card.Title>Taj Mahal</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body> 
              </Card>
              </div>

            </article>
          </div>

          <div class="col-xl-4 col-lg-6">
            <article>
            <div class="col-xl-4 col-lg-6" style={{ marginLeft:'50px'}}>
              <Card style={{ width: '23rem' }}>
                <Card.Img variant="top" src={histo2} style={{ width: '23rem',height:'300px' }} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body> 
              </Card>
              </div>
            </article>
          </div>

          <div class="col-xl-4 col-lg-6">
            <article>
            <div class="col-xl-4 col-lg-6" style={{ marginLeft:'50px'}}>
              <Card style={{ width: '23rem' }}>
                <Card.Img variant="top" src={histo3} style={{ width: '23rem',height:'300px' }} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body> 
              </Card>
              </div>
            </article>
          </div>
          {/* <div class="col-xl-4 col-lg-6" style={{ marginLeft:'20px'}}>
            <Card style={{ width: '23rem' }}>
              <Card.Img variant="top" src='assets/img/blog/blog-1.jpg' style={{ width: '23rem',height:'300px' }} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body> 
            </Card>
            </div>
            <div class="col-xl-4 col-lg-6" style={{ marginLeft:'0px'}}>
            <Card style={{ width: '23rem' }}>
              <Card.Img variant="top" src='assets/img/blog/blog-1.jpg' style={{ width: '23rem',height:'300px' }} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body> 
            </Card>
            </div> */}
            
        </div>
      </div>
    </section>
</section>
    </>
  );
}

export default Places;