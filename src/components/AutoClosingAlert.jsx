import { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';

const AutoClosingAlert = ({ message, duration, variant, className }) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
        }, duration);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Alert className={className} variant={variant} show={show} onClose={() => setShow(false)} dismissible>
            {message}
        </Alert>
    );
};

export default AutoClosingAlert;
