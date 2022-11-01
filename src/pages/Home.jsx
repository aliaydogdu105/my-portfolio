import React from "react";
import { Carousel } from "react-bootstrap";
import Skills from "../components/Skills";
import carouselbg from "../assets/carousel/carouselbg.jpg";

const Home = () => {
  return (
    <div className="mainPage d-flex align-items-center flex-column pt-5 ">
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
              I'm a Software Developer. I’m currently interested front-end
              development with React.
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={carouselbg} alt="Second slide" />
          <Carousel.Caption className="d-flex flex-column justify-content-center h-100">
            <h4>
              I will start learning Next.js soon. Afterwards, my plans are to
              learn Django and Node.js for the backend
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
      <Skills />
    </div>
  );
};

export default Home;
