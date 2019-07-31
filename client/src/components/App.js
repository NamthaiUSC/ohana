import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import Home from "./Home";
import CityPage from "./CityPage";
import HighSchoolPage from "./HighSchoolPage";
import About from "./About";
import Footer from "./Footer";
import Background from "../background.jpg";

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<div>
				<BrowserRouter>
					<div
						className=""
						style={{
							backgroundImage: `url(${Background})`,
							backgroundSize: "cover"
						}}
					>
						<Header />
						<Route exact path="/" component={Landing} />
						<Route exact path="/home" component={Home} />
						<Route exact path="/about" component={About} />
						<Route exact path="/citypage" component={CityPage} />
						<Route
							exact
							path="/highschoolpage"
							component={HighSchoolPage}
						/>
						<Footer />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default connect(
	null,
	actions
)(App);
