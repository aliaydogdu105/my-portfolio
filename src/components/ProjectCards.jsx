import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import movie from "../assests/projectsgif/movie-app.gif";

function ProjectCards() {
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={movie} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Button variant="primary">Go somewhere</Button>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
