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
    <Card className="m-3 col-10 col-sm-4 col-lg-3">
      <div className="d-flex align-items-center">
        <Card.Img
          style={{ width: "100%" }}
          src={loaded ? `./projectsgif/${gif}.gif` : loading}
          alt={name}
          onLoad={onImageLoaded}
        />
      </div>

      <Card.Body className="">
        <Card.Title className="text-center">{name}</Card.Title>
        <Button variant="primary">
          <a href={codes} target="_blank" rel="noopener noreferrer">
            Source Codes
          </a>
        </Button>
        <Button variant="danger">
          <a href={link} target="_blank" rel="noopener noreferrer">
            Link
          </a>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCards;
