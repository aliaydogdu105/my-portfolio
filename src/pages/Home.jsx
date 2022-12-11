import React from "react";
import { Carousel } from "react-bootstrap";
import carouselbg from "../assets/carousel/carouselbg.jpg";

const Home = () => {
  return (
    <div className="mainPage d-flex align-items-center flex-column">
      <Carousel className="m-3 container col-sm-8 ">
        <Carousel.Item>
          <img
            className="d-block img-fluid"
            src={carouselbg}
            alt="First slide"
          />
          <Carousel.Caption className="d-flex flex-column justify-content-center h-100">
            <h1>
              <strong>Hi, I'm Ali</strong>
            </h1>
            <h4>
              I'm a Software Developer. I'm currently interested front-end
              development with React.
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carouselbg} alt="Second slide" />
          <Carousel.Caption className="d-flex flex-column justify-content-center h-100">
            <h4>
              I'm currently in the process of learning Django and Docker.
              Afterwards, I planned to learn Next.js, Typescript and Node.js.
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carouselbg} alt="Third slide" />
          <Carousel.Caption className="d-flex flex-column justify-content-center h-100">
            <h4>
              Ask me any questions you have about front-end development. I'd be
              glad to help you...
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
