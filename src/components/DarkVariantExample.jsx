import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Traditional from '../assests/Discover_images/traditional2.jpg'
import Concert from '../assests/Discover_images/concert1.jpg'
import Concert2 from '../assests/concert2.jpg'
function DarkVariantExample() {
    return (
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-[80vw] h-[80vh] object-cover"
              src={Traditional}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-[80vw] h-[80vh] object-cover"
              src={Concert}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-[80vw] h-[80vh] object-cover"
              src={Concert2}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
}

export default DarkVariantExample



