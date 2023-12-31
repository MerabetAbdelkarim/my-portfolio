import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedinIn, FaFacebook, FaYoutube, FaBehance  } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    
                    <Col size={12} sm={6}>
                        <h3 className="logo">
                            Merabet Abdelkarim
                        </h3>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/merabet-abdelkarim/" target="_blank"><FaLinkedinIn /></a>
                            <a href="https://www.facebook.com/karimkarimmerabet/" target="_blank"><FaFacebook /></a>
                            <a href="https://www.behance.net/abdelkamerabet" target="_blank"><FaBehance /></a>
                            <a href="https://www.youtube.com/@merabetabdelkarim" target="_blank"><FaYoutube /></a>
                        </div>
                        <p>Copyright 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}