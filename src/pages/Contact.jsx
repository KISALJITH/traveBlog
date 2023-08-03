import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'

import '../styles/contact.css'

const socialLinks = [
    {
        url: "#",
        icon: "ri-facebook-line",
    },
    {
        url: "#",
        icon: "ri-instagram-line",
    },
    {
        url: "#",
        icon: "ri-linkedin-line",
    },
    {
        url: "#",
        icon: "ri-twitter-line",
    }
];

const Contact = () => {
  return <Helmet title='Contact'>
    {/* <CommonSection title='Contact Us'/> */}
    <section>
        <Container>
            <Row>
                <Col lg='7' md='7'>
                    <h6 className="fw-bold mb-4 contact-title">Get In Touch</h6>

                    <Form>
                        <FormGroup className='contact__form'>
                            <Input placeholder='Your Name' type='text'/>
                        </FormGroup>
                        <FormGroup className='contact__form'>
                            <Input placeholder='Email' type='email'/>
                        </FormGroup>
                        <FormGroup className='contact__form'>
                            <textarea 
                                rows="5" 
                                placeholder='Message'
                                className='textarea message-area '
                            ></textarea>
                        </FormGroup>

                        <button className='contact__btn' type='submit'>Send Message</button>
                    </Form>
                </Col>

                <Col lg='5' md='5'>
                    <div className="contact__info">
                        <h6 className="fw-bold contact-title">Contact Information</h6>
                        <p className="section__description mb-0">
                            2/365, Colombo 07, Sri Lanka
                        </p>
                        <div className="d-flex align-items-center gap-2">
                            <h6 className='mb-0 fs-6'>Phone:</h6>
                            <p className="section__description mb-0">+94 11 485 2069</p>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <h6 className='mb-0 fs-6'>Email:</h6>
                            <p className="section__description mb-0">Trave@gmail.com</p>
                        </div>

                        <h6 className="fw-bold mt-4 contact-title">Follow Us</h6>

                        <div className="d-flex align-items-center gap-4 mt-3">
                            {
                                socialLinks.map((item, index) => (
                                    <Link to={item.url} key={index}
                                        className='social__link-icon'>
                                        <i class={item.icon}></i>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  </Helmet>
}

export default Contact