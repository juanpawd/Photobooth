import React from "react";
import { Row, Col } from "react-bootstrap";

const PackageOne = (props) => (
    <Row className="package-one">
        <Col xs={12}>
            <Row>
                <Col xs={12} md={8} lgOffset={2} lg={3}>
                    <h2>{props.title}</h2>
                </Col>
                <Col xs={12} md={8} lg={7}>
                    <img src={props.homeImage} alt={'imagen'} />
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={8} lgOffset={2} lg={3} className="blue-square">
                    <h2>{props.title}</h2>
                </Col>
            </Row>
        </Col>
    </Row>
)

export default PackageOne;