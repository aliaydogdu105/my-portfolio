import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { FaHtml5, FaCss3Alt, FaSass } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiBootstrap,
  SiMaterialui,
  SiTailwindcss,
  SiVisualstudiocode,
  SiFigma,
  SiPython,
} from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";

function Skills() {
  return (
    <Card className="col-sm-5">
      <Card.Header className="text-center text-decoration-underline fw-bold">
        Languages and Tools
      </Card.Header>
      <ListGroup className="text-center font-monospace" variant="flush">
        <ListGroup.Item>
          <FaHtml5 /> HTML
        </ListGroup.Item>
        <ListGroup.Item>
          <FaCss3Alt /> CSS
        </ListGroup.Item>
        <ListGroup.Item>
          <SiJavascript /> JavaScript
        </ListGroup.Item>
        <ListGroup.Item>
          <SiReact /> React
        </ListGroup.Item>
        <ListGroup.Item>
          <SiRedux /> Redux
        </ListGroup.Item>
        <ListGroup.Item>
          <SiBootstrap /> Bootstrap
        </ListGroup.Item>
        <ListGroup.Item>
          <FaSass /> Sass
        </ListGroup.Item>
        <ListGroup.Item>
          <SiMaterialui /> Material UI
        </ListGroup.Item>
        <ListGroup.Item>
          <SiTailwindcss /> Tailwind
        </ListGroup.Item>
        <ListGroup.Item>
          <SiVisualstudiocode /> VS Code
        </ListGroup.Item>
        <ListGroup.Item>
          <SiFigma /> Figma
        </ListGroup.Item>
        <ListGroup.Item>
          <SiPython /> Python
        </ListGroup.Item>
        <ListGroup.Item>
          <AiOutlineConsoleSql /> SQL
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default Skills;
