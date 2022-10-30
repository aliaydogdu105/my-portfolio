import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import loading from "../assets/loading/loading.gif";
import { useState } from "react";

const Certifications = ({ name, image, link, organization }) => {
  const [loaded, setLoaded] = useState(false);
  const onImageLoaded = () => {
    setLoaded(true);
  };

  return (
    <Card
      className="text-center d-flex align-items-center justify-content-center m-3 col-10 col-sm-4 col-lg-3"
      style={{ width: "20rem", height: "25rem" }}
    >
      <Card.Body className="d-flex bg-warning align-items-center justify-content-center flex-column">
        <Card.Img
          variant="top"
          style={{ width: "100%", height: "71%", borderRadius: "0.5rem" }}
          src={loaded ? `./certificateimg/${image}.png` : loading}
          alt={name}
          onLoad={onImageLoaded}
        />
        <Card.Title
          className="m-auto"
          style={{
            fontSize: "1.3rem",
            fontFamily: "cursive",
          }}
        >
          {name}
        </Card.Title>
        <Button
          className="bg-success w-50"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Show
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted w-100">{organization}</Card.Footer>
    </Card>
  );
};

export default Certifications;
