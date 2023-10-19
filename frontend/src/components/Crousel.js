import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import slide1 from '../img/slide/slide-01.jpg';
import slide2 from '../img/slide/slide-02.jpg';
import slide3 from '../img/slide/slide-03.jpg';
function Slide() {
  return (
    <Carousel class="mb-5">
      <Carousel.Item interval={1000}>
      <img
          className="d-block w-100"
          // src="assets\img\slide\slide-02.jpg"
          src={slide2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img
          className="d-block w-100"
          src={slide3}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          // src="assets/img/slide/slide-03.jpg"
          src={slide1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;