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
    <Card style={{ width: "20rem" }}>
      <Card.Img
        variant="top"
        src={loaded ? `../assets/projectsgif/${gif}.gif` : loading}
        alt={name}
        onLoad={onImageLoaded}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
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
