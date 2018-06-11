import React from 'react';
import { Grid, Row, Nav, Navbar, NavItem } from 'react-bootstrap';

class NavBar extends React.Component{
    render(){
        return(
            <header>
                <Grid fluid={true}>
                    <Row>
                        <Navbar inverse collapseOnSelect fixedTop={true} fluid={true}>
                            <Navbar.Header>
                                <Navbar.Brand>
                                <a href="#brand">
                                    <img src="images/photobooth@2x.png" alt="Photobooth Costa Rica" className="logo" />
                                </a>
                                </Navbar.Brand>
                                <Navbar.Toggle />
                            </Navbar.Header>
                            <Navbar.Collapse>
                                <Nav>
                                <NavItem eventKey={1} href="#">
                                    Home
                                </NavItem>
                                <NavItem eventKey={2} href="#">
                                    Servicios
                                </NavItem>
                                <NavItem eventKey={1} href="#">
                                    Blog
                                </NavItem>
                                <NavItem eventKey={2} href="#">
                                    Cotizaciones
                                </NavItem>
                                <NavItem eventKey={2} href="#">
                                    Contácto
                                </NavItem>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Row>
                </Grid>
            </header>
        )
    }
}

export default NavBar;