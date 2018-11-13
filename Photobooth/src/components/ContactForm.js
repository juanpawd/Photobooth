import React from "react";
import { Row, Col, FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import Button from './Button';

const ContactForm = (props) => (
    <Row className="contact-form">
        <Col xs={12}>
            <Row>
                <Col xs={12} md={12} lgOffset={2} lg={8} className="">
                    <Row>
                        <Col xs={12} md={6} lg={6}>
                            <FormGroup controlId="formValidationSuccess1" validationState={null}>
                                <ControlLabel>Nombre:</ControlLabel>
                                <FormControl 
                                    value={props.name}
                                    name="name"
                                    type="text"
                                    onChange={props.inputChange} />
                            </FormGroup>
                            <FormGroup controlId="formValidationSuccess1" validationState={null}>
                                <ControlLabel>Teléfono:</ControlLabel>
                                <FormControl value={props.phone}
                                    name="phone"
                                    type="text"
                                    onChange={props.inputChange} />
                            </FormGroup>
                            <FormGroup controlId="formValidationSuccess1" validationState={null}>
                                <ControlLabel>Email:</ControlLabel>
                                <FormControl value={props.mail}
                                    name="email"
                                    type="text"
                                    onChange={props.inputChange} />
                            </FormGroup>
                            <FormGroup controlId="formControlsTextarea">
                                <ControlLabel>Comentarios:</ControlLabel>
                                <FormControl 
                                    componentClass="textarea" 
                                    value={props.comments}
                                    name="comments"
                                    onChange={props.inputChange} /> />
                            </FormGroup>
                            <Button text="Limpiar" />
                            <button
                                text="Enviar"
                                type="button"
                                className="button btn btn-default"
                                onClick={props.sendMail}
                            >
                                Enviar
                            </button>
                        </Col>
                        <Col xs={12} xsHidden smHidden md={6} lgOffset={1} lg={5} className="image-block">
                            <img src="images/photobooth-grid.png" className="img-responsive image" alt="" />
                            <p>Email: info@photoboothcr.com</p>
                            <p>Tel: 506 2560 0081 – 506 8845 6416</p>
                            <p>Síguenos: 
                                <a href='https://www.facebook.com/photoboothcr/' className="social" rel="noopener noreferrer" target="_blank">
                                    <img src='images/facebook-blue-icon.svg' alt="" />
                                </a> 
                                <a href='https://twitter.com/PhotoBoothCR' className="social" rel="noopener noreferrer" target="_blank">
                                    <img src='images/twitter-blue-icon.svg' alt="" />
                                </a>
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    </Row>
)

export default ContactForm;