import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Timeline, NoMatch, SimpleHome, Profile } from './Screens';
import { NavigationBar, Layout, Footer } from './Components';

import './App.css';

function App() {
	return (
		<div className="app">
			<NavigationBar />
			<Layout>
				<Router>
					<Switch>
						<Route exact path="/" component={SimpleHome} />
						<Route path="/timeline" component={Timeline} />
						<Route path="/about" component={Profile} />
						<Route component={NoMatch} />
					</Switch>
				</Router>
				<Footer />
			</Layout>
		</div>
	);
}

export default App;
