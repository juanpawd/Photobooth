import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Services from './Services';
import Blog from './Blog';
import Quote from './Quote';
import Contact from './Contact';
import NotFound from './NotFound';

import NavBar from './../components/NavBar';
import Footer from './../components/Footer';

import Packages from './../data/packages';

class App extends React.Component{
    state = {
		packages: Packages
	}
    render(){
        return(
            <React.Fragment>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/services" component={Services} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/cotizaciones" component={Quote} />
                    <Route path="/contacto" component={Contact} />
                    <Route component={NotFound} />
                </Switch>
                <Footer />
            </React.Fragment>
        )
    }
}

export default App;