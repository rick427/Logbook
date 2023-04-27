import React from 'react';
import Button from '../Button/Button';

import "./Form.css";

const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Your message has been sent successfully!");
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <input type="text" placeholder='Enter your name' required/>
            <input type="email" placeholder='Enter your email adress' required />
            <textarea rows={4} placeholder='Your message' />

            <Button type="submit">
                contact us
            </Button>
        </form>
    )
}

export default ContactForm
