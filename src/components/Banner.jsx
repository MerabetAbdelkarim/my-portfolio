import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap"
import { BsArrowRightCircle } from "react-icons/bs";
import imageHead from "../assets/img/header-img.svg"
import CV from "../assets/pdf/Merabet-Abdelkarim-Resume.pdf"


function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <div className={"animate__animated animate__fadeIn"}>
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>{`Hi! I'm Merabet Abdelkarim `} <span className="txt-rotate" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                            <p>
                                I am a front-end developer specializing in ReactJS and Bootstrap, with sufficient experience in developing scalable, maintainable and easy-to-use web applications.
                                <br />
                                Continuous learning is a priority for me, which allows me to stay ahead of the latest trends and technologies in web development.
                                <br />
                                Let's connect and discuss how I can contribute to your team's success.
                            </p>
                            <form method="get" action={CV} >
                                <button type="submit">Download CV<BsArrowRightCircle size={18} /></button>
                            </form>
                        </div>

                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <div className={"animate__animated animate__zoomIn"}>
                            <img src={imageHead} width={"100%"} alt="Header Img" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner