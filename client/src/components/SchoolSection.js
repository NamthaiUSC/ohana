import React, { Component } from "react";
import ProfileBox from "./ProfileBox";
import { connect } from "react-redux";

export class SchoolSection extends Component {
	renderSchoolInfo() {
		console.log(this.props);
		switch (this.props.uni) {
			case false:
				return (
					<div>
						<div className="columns">
							<div className="column ">
								<div className="title">
									Sorry, it looks like no one on this platform
									has gone to this university just yet.
								</div>
							</div>
						</div>
					</div>
				);
			case null:
				return (
					<div>
						<div className="columns">
							<div className="column ">
								<div className="title">No Search</div>
							</div>
						</div>
					</div>
				);
			default:
				const { universityName } = this.props.uni;
				return (
					<div>
						<div className="columns">
							<div className="column ">
								<div className="title">{universityName}</div>
							</div>
						</div>
					</div>
				);
		}
	}

	renderHighSchoolLevel() {
		return (
			<div>
				<div className="title is-4">
					Also from Ruamrudee International School
				</div>
				<div className="columns">
					<div className="column is-one-fifth">
						<ProfileBox />
					</div>
					<div className="column is-one-fifth">
						<ProfileBox />
					</div>
					<div className="column is-one-fifth">
						<ProfileBox />
					</div>
				</div>
			</div>
		);
	}

	renderCityLevel() {
		return (
			<div>
				<div className="title is-4">Also from Bangkok</div>
				<div className="columns">
					<div className="column is-one-fifth">
						<ProfileBox />
					</div>
					<div className="column is-one-fifth">
						<ProfileBox />
					</div>
					<div className="column is-one-fifth">
						<ProfileBox />
					</div>
					<div className="column is-one-fifth">
						<ProfileBox />
					</div>
					<div className="column is-one-fifth">
						<ProfileBox />
					</div>
				</div>
				<div className="columns">
					<div className="column is-one-fifth">
						<ProfileBox />
					</div>
					<div className="column is-one-fifth">
						<ProfileBox />
					</div>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div>
				<div>{this.renderSchoolInfo()}</div>
				<br />
				<div>{this.renderHighSchoolLevel()}</div>
				<br />
				<div>{this.renderCityLevel()}</div>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		auth: state.auth,
		uni: state.uni
	};
}

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SchoolSection);
