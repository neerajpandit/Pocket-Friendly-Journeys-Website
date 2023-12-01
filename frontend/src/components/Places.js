import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import histo1 from '../img/place/histo-1.jpg';
import histo2 from '../img/place/histo-2.jpg';
import histo3 from '../img/place/histo-3.webp';
function Places() {
  return (
    <>
  
    <div class="container-fluid booking mt-5 pb-5">
        <div class="container pb-5">
            <div class="bg-light shadow" style={{padding: '30px'}}>
                <div class="row align-items-center" style={{minheight: '60px'}}>
                    <div class="col-md-10">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="mb-3 mb-md-0">
                                    <select class="custom-select px-4" style={{height: '47px'}}>
                                        <option selected>Destination</option>
                                        <option value="1">Destination 1</option>
                                        <option value="2">Destination 1</option>
                                        <option value="3">Destination 1</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="mb-3 mb-md-0">
                                    <div class="date" id="date1" data-target-input="nearest">
                                        <input type="text" class="form-control p-4 datetimepicker-input" placeholder="Depart Date" data-target="#date1" data-toggle="datetimepicker"/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="mb-3 mb-md-0">
                                    <div class="date" id="date2" data-target-input="nearest">
                                        <input type="text" class="form-control p-4 datetimepicker-input" placeholder="Return Date" data-target="#date2" data-toggle="datetimepicker"/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="mb-3 mb-md-0">
                                    <select class="custom-select px-4" style={{height: '47px'}}>
                                        <option selected>Duration</option>
                                        <option value="1">Duration 1</option>
                                        <option value="2">Duration 1</option>
                                        <option value="3">Duration 1</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                    <button class="btn btn-primary btn-block" type="submit" style={{height: '47px'}}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
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