import React from "react";
import { Row, Col, FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import { Context } from './../containers/Provider';
import Button from './Button';

class QuoteForm extends React.Component{
    nameRef = React.createRef();
    phoneRef = React.createRef();
    mailRef = React.createRef();
    mailRef = React.createRef();
    directionRef = React.createRef();
    commentsRef = React.createRef();

    state = {
        service: "",
        hours: 0,
        adicionals: "",
        name: "",
        phone: "",
        email: "",
        direction: "",
        comments: ""
    }
    handleClean = (event) =>{
        event.preventDefault();
        console.log('Limpiando')
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        console.log('Enviando')
    }
    selectItem = (event) =>{
        event.preventDefault();
        const name = event.target.getAttribute('data-name');
        const value = event.target.getAttribute('data-value');

        this.setState({
            [name]: value
        })
    }
    render(){
        return(
            <Row className="quote-form">
                <Col xs={12}>
                    <Row>
                        <Col xs={12} md={12} lgOffset={2} lg={8} className="block">
                            <p className="block-title">Elige un servicio:</p>
                            <Context.Consumer>
                                {(context) => (
                                    <Row className="services-menu">
                                        <Col xs={12} className="icons">
                                            <Row>
                                                {
                                                    context.state.packages.map((service, index) => {
                                                        return(
                                                            <Col xs={6} md={2} lg={3} 
                                                                key={index} 
                                                                onClick={this.selectItem} 
                                                                className={this.state.service === `${index}`? 'icon selected':'icon'} 
                                                                data-name="service"
                                                                data-value={`${index}`}>
                                                                <div className="img-container">
                                                                    <img src={service.icon} className={service.name.split(' ').join('-').toLowerCase()} alt='' />
                                                                </div>
                                                                <p>{service.name}</p>
                                                            </Col>
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Col>
                                    </Row>
                                )}
                            </Context.Consumer>
                        </Col>
                        <Col xs={12} md={12} lgOffset={2} lg={8} className="block">
                            <p className="block-title">Duración del servicio:</p>
                            <Row className="answers">
                                <Col xs={6} md={2} lg={3}>
                                    <p onClick={this.selectItem} className={this.state.hours === '2'? 'selected':''} data-name="hours" data-value="2">2 horas</p>
                                </Col>
                                <Col xs={6} md={2} lg={3}>
                                    <p onClick={this.selectItem} className={this.state.hours === '3'? 'selected':''} data-name="hours" data-value="3">3 horas</p>
                                </Col>
                                <Col xs={6} md={2} lg={3}>
                                    <p onClick={this.selectItem} className={this.state.hours === '4'? 'selected':''} data-name="hours" data-value="4">4 horas</p>
                                </Col>
                                <Col xs={6} md={2} lg={3}>
                                    <p onClick={this.selectItem} className={this.state.hours === '5'? 'selected':''} data-name="hours" data-value="5">5 horas</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} md={12} lgOffset={2} lg={8} className="block">
                            <p className="block-title">Adicionales:</p>
                            <Row className="answers">
                                <Col xs={6} md={2} lg={4}>
                                    <p  onClick={this.selectItem} 
                                        className={this.state.adicionals === '1'? 'selected':''} 
                                        data-name="adicionals" 
                                        data-value="1">
                                        Mesa con álbum de fotografías
                                    </p>
                                </Col>
                                <Col xs={6} md={2} lg={4}>
                                    <p  onClick={this.selectItem} 
                                        className={this.state.adicionals === '2'? 'selected':''} 
                                        data-name="adicionals"
                                        data-value="2">
                                        1 Edecán adicional por una hora
                                    </p>
                                </Col>
                                <Col xs={6} md={2} lg={4}>
                                    <p  onClick={this.selectItem} 
                                        className={this.state.adicionals === '3'? 'selected':''} 
                                        data-name="adicionals"
                                        data-value="3">
                                        Alquilar Photo Vocha como cabina
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} md={12} lgOffset={2} lg={8} className="">
                            <p className="block-title">Información de contácto:</p>
                            <Row>
                                <form onSubmit={this.handleSubmit}>
                                <Col xs={12} md={6} lg={6}>
                                    <FormGroup controlId="formValidationSuccess1" validationState={null}>
                                        <ControlLabel>Nombre:</ControlLabel>
                                        <FormControl type="text" inputRef={ ref => { this.nameRef = ref } } onChange={this.inputChange} />
                                    </FormGroup>
                                    <FormGroup controlId="formValidationSuccess1" validationState={null}>
                                        <ControlLabel>Teléfono:</ControlLabel>
                                        <FormControl type="text" inputRef={ ref => { this.phoneRef = ref } } onChange={this.inputChange} />
                                    </FormGroup>
                                </Col>
                                <Col xs={12} md={6} lg={6}>
                                    <FormGroup controlId="formValidationSuccess1" validationState={null}>
                                        <ControlLabel>Email:</ControlLabel>
                                        <FormControl type="text" inputRef={ ref => { this.mailRef = ref } } onChange={this.inputChange} />
                                    </FormGroup>
                                    <FormGroup controlId="formValidationSuccess1" validationState={null}>
                                        <ControlLabel>Dirección del evento:</ControlLabel>
                                        <FormControl type="text" inputRef={ ref => { this.directionRef = ref } } onChange={this.inputChange} />
                                    </FormGroup>
                                </Col>
                                <Col xs={12} md={12} lg={12}>
                                    <FormGroup controlId="formControlsTextarea">
                                        <ControlLabel>Comentarios:</ControlLabel>
                                        <FormControl componentClass="textarea" placeholder="" inputRef={ ref => { this.commentsRef = ref } } onChange={this.inputChange} />
                                    </FormGroup>

                                    <Button text="Limpiar" onClick={this.hadleClean} />
                                    <Button type="submit" text="Enviar" onClick={this.handleSubmit} />
                                </Col>
                                </form>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )   
    }
}

export default QuoteForm;