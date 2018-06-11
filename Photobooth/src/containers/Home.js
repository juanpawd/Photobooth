import React from 'react';
import Hero from './../components/Hero';
import Us from './../components/Us';
import SectionTitle from './../components/SectionTitle';
import PackageOne from './../components/PackageOne';

import { Grid } from "react-bootstrap";

class Home extends React.Component{
    render(){
        return(
            <Grid fluid>
                <Hero title={"Ideas creativas para eventos inolvidables"} />
                <Us />
                <SectionTitle title={'Paquetes'} />
                <PackageOne title={'Paquetes'} />
            </Grid>
        )
    }
}

export default Home;