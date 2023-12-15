import { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser'
import AutoClosingAlert from "./AutoClosingAlert";

export const Contact = () => {
    const form = useRef()

    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const statuseInitial = {
        succes: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState(statuseInitial);

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        emailjs.sendForm('service_ij5n97i', 'template_31a2xvk', form.current, 'mcJGwOcWBzOtav1yC')
            .then((result) => {
                console.log(result.text);
                setStatus({ succes: true, message: 'Message sent successfully' });
            }, (error) => {
                console.log(error.text);
                setStatus({ succes: false, message: 'Something went wrong, please try again later.' });
            });
        setButtonText("Send");
        setFormDetails(formInitialDetails);
        setStatus(statuseInitial);
    };

    const initialValues = {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        message: ''
    }

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Get In Touch</h2>
                                    <form ref={form} onSubmit={handleSubmit}>
                                        <Row>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="text" name="first_name" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="text" name="last_name" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="email" name="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="tel" name="phone" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                            </Col>
                                            <Col size={12} className="px-1">
                                                <textarea rows="6" name="message" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                                <button type="submit"><span>{buttonText}</span></button>
                                            </Col>
                                        </Row>
                                    </form>
                                    {
                                        status.message
                                        &&
                                        <AutoClosingAlert className={'fixed-alert'} variant={status.succes === false ? 'danger' : 'success'} dismissible message={status.message} duration={5000} />
                                    }
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
