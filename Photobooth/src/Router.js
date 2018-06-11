import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './fonts/myriad.ttf';
import './fonts/venetian.ttf';
import './css/main.scss';

import App from './containers/App';

class Router extends React.Component{
	render(){
		return(
			<React.Fragment>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</React.Fragment>
		)
	}
}

export default Router;