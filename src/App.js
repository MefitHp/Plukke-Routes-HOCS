import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import './App.css';
import isAuth from './HOCS/isAuth';

const Menu = withRouter(({ match }) => {
	return (
		<React.Fragment>
			<Link to="/">/</Link>
			{' | '}
			<Link to="/dashboard">Dashboard</Link>
			{' | '}
		</React.Fragment>
	);
});

const Dashboard = isAuth(({ match }) => {
	return (
		<React.Fragment>
			<p>Dashboard</p>
			<Link to={`${match.path}/clients`}>Clientes</Link>
			{' | '}
			<Link to={`${match.path}/products`}>Productos</Link>

			<Route path={`${match.path}/clients`} component={Clients} />
			<Route path={`${match.path}/products`} component={Products} />
		</React.Fragment>
	);
});

const Clients = () => {
	return <p>Cientes</p>;
};

const Products = () => {
	return <p>Products</p>;
};

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<Menu />
					<Route exact path="/" component={() => <p>Main</p>} />
					<Route path="/dashboard" component={Dashboard} />
				</Router>
			</div>
		);
	}
}

export default App;
