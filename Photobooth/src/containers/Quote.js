import React from "react";
import Hero from "./../components/Hero";
import TwoColumnsContent from "./../components/TwoColumnsContent";
import QuoteForm from "./../components/QuoteForm";
import { Grid } from "react-bootstrap";

import NavBar from "./../components/NavBar";
import Footer from "./../components/Footer";

class Quote extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <Grid fluid>
                    <Hero title={"Cotizar"} />
                    <TwoColumnsContent />
                    <QuoteForm />
                </Grid>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Quote;
