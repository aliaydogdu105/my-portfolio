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
      className="cards p-3 "
      style={{
        width: "20rem",
        height: "24rem",
        backgroundColor: "#f2af05",
      }}
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
        <div className="d-flex gap-2">
          <Button
            className="buttons w-50"
            style={{ backgroundColor: "#8C55D9", border: "none" }}
            href={codes}
            target="_blank"
            rel="noopener noreferrer"
          >
            Codes
          </Button>
          <Button
            className="buttons w-50"
            style={{ backgroundColor: "#038C65", border: "none" }}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCards;
