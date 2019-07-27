import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

import Dashboard from "./Dashboard";
import SchoolSection from "./SchoolSection";
import ProfileCard from "./ProfileCard";

export class Home extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	renderHome() {
		if (this.props.auth) {
			return (
				<div className="container">
					<br />
					<div className="columns">
						<div className="column is-one-fifth is-full-mobile">
							<Dashboard />
						</div>
						<div className="column is-three-fifths is-full-mobile">
							<SchoolSection />
						</div>
						<div className="column is-one-fifth is-full-mobile">
							<ProfileCard />
						</div>
					</div>
					<br />
				</div>
			);
		}

		return (
			<div className="has-text-centered">
				<section className="hero is-fullheight-with-navbar ">
					<div className="hero-body">
						<div className="container">
							<div className="button is-loading is-link is-large is-size-1 is-outlined is-inverted" />
							<div>Signing In</div>
						</div>
					</div>
				</section>
			</div>
		);
	}

	render() {
		return (
			<div className="has-background-white-bis">{this.renderHome()}</div>
		);
	}
}

const mapDispatchToProps = {
	fetchUser
};

function mapStateToProps(state) {
	return {
		auth: state.auth
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
