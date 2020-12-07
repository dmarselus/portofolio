import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Timeline, About, NoMatch } from './Screens';
import { NavigationBar, TSParticles, Layout } from './Components';
import './App.css';

function App() {
	return (
		<React.Fragment>
			<TSParticles />
			<NavigationBar />
			<Layout>
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/timeline" component={Timeline} />
						<Route path="/about" component={About} />
						<Route component={NoMatch} />
					</Switch>
				</Router>
			</Layout>
		</React.Fragment>
	);
}

export default App;
