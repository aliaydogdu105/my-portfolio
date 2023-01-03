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
      className="text-center d-flex align-items-center justify-content-center col-10 col-sm-4 col-lg-3"
      style={{
        width: "20rem",
        height: "25rem",
        boxShadow:
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        backgroundColor: "#BF9B7A",
        border: "none",
      }}
    >
      <Card.Body
        className="d-flex align-items-center justify-content-center flex-column"
        style={{ backgroundColor: "#BF9B7A", borderRadius: "5px" }}
      >
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
          className="buttons w-50"
          style={{ backgroundColor: "#185359", border: "none" }}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Show
        </Button>
      </Card.Body>
      <Card.Footer
        className="text-muted w-100"
        style={{ backgroundColor: "#F2E8DF" }}
      >
        {organization}
      </Card.Footer>
    </Card>
  );
};

export default Certifications;
