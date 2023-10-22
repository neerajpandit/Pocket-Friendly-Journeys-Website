import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import b1 from '../img/blog/blog-1.jpg';

import './Blog.css';
function Blog(){
    return(
        <>
        <div class="container section-title" data-aos="fade-up">
  <h2>Blog</h2>
  <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
</div>
    <Card class="mt-4" style={{ width: '23rem' }}>
      <Card.Img variant="top" src={b1} style={{ width: '23rem',height:'300px' }} />
      <Card.Body>
        <Card.Title>Akhil Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      
    </Card>

        </>
    );
}
export default Blog;