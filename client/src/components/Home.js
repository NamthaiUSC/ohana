import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

import Dashboard from "./Dashboard";
import SchoolSection from "./SchoolSection";
import ProfileCard from "./ProfileCard";

export class Home extends Component {
	componentDidMount() {
		this.props.fetchUser();
		//this.props.getUser(this.props.match.params.selfID);
	}

	renderHome() {
		return (
			<div>
				<div className="columns">
					<div className="column is-one-fifth ">
						<Dashboard />
					</div>
					<div className="column is-three-fifths">
						<SchoolSection />
					</div>
					<div className="column is-one-fifth">
						<ProfileCard />
					</div>
				</div>
			</div>
		);
	}

	render() {
		return <div>{this.renderHome()}</div>;
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
