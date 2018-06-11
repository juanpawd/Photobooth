import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Footer extends React.Component{
    render(){
        return(
            <footer>
                <Grid>
                    <Row>
                        <Col xsOffset={1} xs={12} md={2}></Col>
                        <Col xsOffset={1} xs={12} md={3}></Col>
                        <Col xsOffset={1} xs={12} md={1}></Col>
                    </Row>
                </Grid>
            </footer>
        )
    }
}

export default Footer;