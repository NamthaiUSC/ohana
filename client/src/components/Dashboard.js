import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export class Dashboard extends Component {
	renderMyUni() {
		if (this.props.auth.university) {
			return (
				<li>
					<span className="icon">
						<i className="fas fa-university" />
					</span>{" "}
					<span>
						{this.props.auth.university.universityName} (
						{this.props.auth.universityGradYear})
					</span>
				</li>
			);
		}
	}

	renderMyHighSchool() {
		if (this.props.auth.highSchool) {
			return (
				<li>
					<span className="icon">
						<i className="fas fa-school" />
					</span>{" "}
					<span>
						{this.props.auth.highSchool} (
						{this.props.auth.highSchoolGradYear})
					</span>
				</li>
			);
		}
	}

	renderMyLocation() {
		if (this.props.auth.country && this.props.auth.city) {
			return (
				<span>
					{this.props.auth.city}, {this.props.auth.country}
				</span>
			);
		}
		return <span>No city and country yet</span>;
	}

	renderDashBoard() {
		if (this.props.auth) {
			const {
				givenName,
				familyName,
				email,
				photoURL,
				major,
				universityGradYear
			} = this.props.auth;
			return (
				<div className="box">
					<aside className="menu">
						<div className="columns is-vcentered">
							<div className="column">
								<figure className="image is-128x128">
									<img
										className="is-rounded"
										src={photoURL}
										alt="Placeholder"
									/>
								</figure>
							</div>
							<div className="column">
								<div>
									<p className="subtitle is-4">{givenName}</p>
									<p className="title is-4">{familyName}</p>
								</div>
							</div>
						</div>
						<div className=" is-size-6">
							<span className="icon ">
								<i className="fas fa-globe-asia fa-fw" />
							</span>{" "}
							{this.renderMyLocation()}
						</div>
						<div className=" is-size-6">
							<span className="icon ">
								<i className="fas fa-book fa-fw" />
							</span>{" "}
							<span>{major ? major : "No major yet"}</span>
						</div>
						<div className=" is-size-6">
							<span className="icon">
								<i className="far fa-envelope fa-fw" />
							</span>{" "}
							<span> {email}</span>
						</div>
						<br />
						<p className="menu-label">My Schools</p>
						<ul className="menu-list">
							{this.renderMyHighSchool()}
							{this.renderMyUni()}
						</ul>
						<p className="menu-label">
							<span>
								My University Applications ({universityGradYear}
								)
							</span>
						</p>
						<ul className="menu-list">
							<li>
								<ul>
									<li>
										<Link className="is-active">
											University of Southern California
										</Link>
									</li>
									<li>
										<Link>Chulalongkorn University</Link>
									</li>
									<li>
										<Link>King's College London</Link>
									</li>
									<li>
										<br />
										<div className="button is-italic">
											Add University
										</div>
									</li>
								</ul>
							</li>
						</ul>
					</aside>
				</div>
			);
		}
	}

	render() {
		return <div>{this.renderDashBoard()}</div>;
	}
}

const mapDispatchToProps = {};

function mapStateToProps(state) {
	return {
		auth: state.auth
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Dashboard);
