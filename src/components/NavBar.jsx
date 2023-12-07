import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap"
import {
    BrowserRouter as Router
} from "react-router-dom";
import { HashLink } from "react-router-hash-link"


function NavBar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    return (
        <>
            <Router>
                <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
                    <Container>
                    <Navbar.Brand href="/">
                        Abdelkarim
                    </Navbar.Brand>
                    <Navbar.Toggle  aria-controls="basic-navbar-nav"></Navbar.Toggle>
                    <Navbar.Collapse   id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="navbar-link" href="#home">Home</Nav.Link>
                            <Nav.Link className="navbar-link" href="#skills">Skills</Nav.Link>
                            <Nav.Link className="navbar-link" href="#projects">Projects</Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <HashLink to='#connect'>
                                <button className="vvd"><span>Let’s Connect</span></button>
                            </HashLink>
                        </span>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Router>
        </>
    )
}

export default NavBar