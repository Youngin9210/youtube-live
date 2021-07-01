import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Features from './components/Features';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Dashboard from './pages/dashboard/dashboard';
import LandingPage from './pages/landingPage/Landing';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import Venues from './pages/venue/venue';
import { UserProvider } from './utils/UserContext';

const App = () => {
	return (
		<Router>
			<UserProvider>
				<div>
					<Navbar />
					<div className="container">
						<Switch>
							<Route exact path="/" component={LandingPage} />
							<Route exact path="/signup" component={SignUp} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/features" component={Features} />
							<Route exact path="/venues" component={Venues} />
							<Route exact path="/dashboard" component={Dashboard} />
						</Switch>
					</div>
				</div>
				<Footer />
			</UserProvider>
		</Router>
	);
};

export default App;
