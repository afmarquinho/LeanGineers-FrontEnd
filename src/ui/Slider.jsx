import Carousel from "react-bootstrap/Carousel";
import { styled } from "styled-components";
import foto1 from "../assets/imagen1.jpg";
import foto2 from "../assets/imagen4.jpg";
import foto3 from "../assets/imagen5.jpg";

import { useState } from "react";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <GrandContainer className="container-fluid p-0 grand-container-slider">
      <div className="row d-flex justify-center align-center">
        <div className="col">
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className="carousel-item carousel-item-1">
              <img src={foto1} alt="" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-item carousel-item-2">
              <img src={foto2} alt="" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-item carousel-item-3">
              <img src={foto3} alt="" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </GrandContainer>
  );
};

export default Slider;
const GrandContainer = styled.div`
  position: relative;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: multiply;
  animation: zoomin 10s linear infinite alternate;
  @keyframes zoomin {
    0% {
      background-size: auto 200%;
    }
    50% {
      background-size: auto 250%;
    }
    100% {
      background-size: auto 200%;
    }
  }
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.753);
  }
  .carousel-item {
   width: 100%;
   height: 500px;
    img{
        object-fit: cover;
        object-position: bottom;
        width: 100%;
        height: 100%;
    }
  }
`;
