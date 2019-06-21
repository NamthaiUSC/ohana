import React, { Component } from "react";
import ProfileBox from "./ProfileBox";

export class SchoolSection extends Component {
	renderSchoolInfo() {
		return (
			<div>
				<div className="columns">
					<div className="column ">
						<div className="title">
							University of Southern California
						</div>
					</div>
				</div>
			</div>
		);
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

export default SchoolSection;
