import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import loading from "../assets/loading/loading.gif";

const ProjectCards = ({ name, gif, link, codes }) => {
  const [loaded, setLoaded] = useState(false);
  const onImageLoaded = () => {
    setLoaded(true);
  };

  return (
    <Card
      className="cards bg-warning m-5 p-3 col-10 col-sm-4 col-lg-3"
      style={{ width: "20rem", height: "24rem" }}
    >
      <div className="d-flex align-items-center" style={{ height: "222px" }}>
        <Card.Img
          style={{ width: "100%", height: "80%", borderRadius: "0.5rem" }}
          src={loaded ? `./projectsgif/${gif}.gif` : loading}
          alt={name}
          onLoad={onImageLoaded}
        />
      </div>

      <Card.Body>
        <Card.Title
          className="text-center"
          style={{
            fontSize: "2rem",
            fontFamily: "cursive",
            borderTop: "2px solid black",
          }}
        >
          {name}
        </Card.Title>
        <Button
          className="bg-primary w-50"
          href={codes}
          target="_blank"
          rel="noopener noreferrer"
        >
          Codes
        </Button>
        <Button
          className="bg-success w-50"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Link
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCards;
