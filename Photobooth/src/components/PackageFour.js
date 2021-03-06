import React from "react";
import { Link } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";

class PackageFour extends React.Component{
    state = {
        visible: false
    }
    handleScroll = (event) => {
        event.preventDefault();
        if (!this.state.visible){
            let packageTop = document.querySelector('.package-four').offsetTop;
            if((this.props.scrollPositon.bottom - 50) >= packageTop){
                this.setState({
                    visible: true
                })
                window.removeEventListener('scroll', this.handleScroll);
            }
        }
    }
    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    }
    render(){
        return(
            <Row className={this.state.visible? 'package-four':'package-four out'}>
                <Col xs={12}>
                    <Row>
                        <Col xs={12} smHidden mdHidden lgHidden className="button-container">
                            <p>{this.props.service.name}</p>
                            <Link to="/servicios">
                                Ver más
                            </Link>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6} className="image-container">
                            <div className="screen"></div>
                            <img src={this.props.service.homeImage} alt={'imagen'} className="img-responsive" />
                        </Col>
                        <div className="second-block">
                            <Col xs={12} md={12} lg={12}>
                                <Row>
                                    <Col xsHidden xs={12} md={6} lg={6} className="button-container blue-square">
                                        <div>
                                            <p>{this.props.service.name}</p>
                                            <Link to="/servicios">
                                                Ver más
                                            </Link>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={6} lg={6}></Col>
                                </Row>
                            </Col>
                            <Col xs={12} md={12} lg={12}>
                                <Row>
                                    <Col xs={12} md={6} lg={6}></Col>
                                    <Col xsHidden smHidden md={6} lg={6} className="second-image">
                                        <div className="screen"></div>
                                        <img src={this.props.service.machineImage} alt={'imagen'} className="img-responsive" />
                                    </Col>
                                </Row>
                            </Col>
                        </div>
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default PackageFour;