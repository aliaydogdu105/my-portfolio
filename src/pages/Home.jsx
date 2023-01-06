import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Front-End Developer",
    "Full-Stack Developer",
    "Software Developer",
  ];
  const period = 2000;
  console.log(delta);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      console.log(index);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(300);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility className="text-white">
              <div>
                <h1>{`Hi! I'm Ali`}</h1>
                <h2>
                  <span
                    className="txt-rotate"
                    dataPeriod="1000"
                    data-rotate='[ "Front-End Developer" ,"Full-Stack Developer", "Software Developer" ]'
                  >
                    <span className="wrap text-success font-monospace">
                      {text}
                    </span>
                  </span>
                </h2>
                <p className="text-white">
                  I'm currently interested full-stack development. I'm presently
                  in the process of learning Django and Docker. Afterwards, I
                  planned to learn Next.js, Typescript and Node.js. Ask me any
                  questions you have about front-end development. I'd be glad to
                  help you...
                </p>
              </div>
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              <div>
                <img
                  className="mx-5 px-5 "
                  src={
                    "https://cdn.pixabay.com/photo/2017/09/02/22/10/dolphin-2708695__340.png"
                  }
                  alt="Header Img"
                />
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
