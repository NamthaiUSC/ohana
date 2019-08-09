import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getUni, getCity } from "../actions";

export class Dashboard extends Component {
	renderMyUni() {
		if (this.props.auth.university) {
			return (
				<li
					onClick={() =>
						this.props.getUni(this.props.auth.university)
					}
				>
					<Link
						to={this.props.auth ? "/home" : "/"}
						className=" has-text-danger has-text-weight-bold"
					>
						<span className="icon">
							<i className="fas fa-university" />
						</span>{" "}
						<span>
							{this.props.auth.university} (
							{this.props.auth.universityGradYear})
						</span>
					</Link>
				</li>
			);
		}
	}

	renderMyHighSchool() {
		if (this.props.auth.highSchool) {
			return (
				<li>
					<Link
						to={this.props.auth ? "/highschoolpage" : "/"}
						className=" has-text-primary has-text-weight-bold"
					>
						<span className="icon">
							<i className="fas fa-school" />
						</span>{" "}
						<span>
							{this.props.auth.highSchool} (
							{this.props.auth.highSchoolGradYear})
						</span>
					</Link>
				</li>
			);
		}
	}

	renderMyLocation() {
		if (this.props.auth.country && this.props.auth.city) {
			return (
				<Link
					className=" has-text-info has-text-weight-bold"
					to={this.props.auth ? "/citypage" : "/"}
				>
					<span className="icon">
						<i className="fas fa-globe-asia fa-fw" />
					</span>{" "}
					<span>
						{this.props.auth.city}, {this.props.auth.country}
					</span>
				</Link>
			);
		}
		return (
			<div>
				<span className="icon">
					<i className="fas fa-globe-asia fa-fw" />
				</span>{" "}
				<span>No city and country yet</span>
			</div>
		);
	}

	createUniversityList() {
		let universityList = [];
		let count = 0;
		this.props.auth.universitiesApplying.forEach(element => {
			universityList.push(
				<li
					key={count}
					onClick={() => this.props.getUni(element.universityName)}
				>
					<Link to={this.props.auth ? "/home" : "/"}>
						{element.universityName}
					</Link>
				</li>
			);
			count++;
		});

		if (count === 0) {
			return (
				<div className="is-italic notification">
					Search universities to add them to your list here!
				</div>
			);
		}

		return <ul>{universityList}</ul>;
	}

	renderDashBoard() {
		if (this.props.auth) {
			const {
				givenName,
				familyName,
				email,
				photoURL,
				major
			} = this.props.auth;
			return (
				<div className="box " style={{ overflowWrap: "break-word" }}>
					<aside className="menu ">
						<div className="columns is-vcentered">
							<div className="column">
								<figure className="image is-128x128 container">
									<img
										className="is-rounded"
										src={photoURL}
										alt="Placeholder"
									/>
								</figure>
							</div>
						</div>
						<div className="has-text-centered">
							<p className="subtitle is-4">{givenName}</p>
							<p className="title is-4">{familyName}</p>
						</div>
						<br />
						<div className=" is-size-6">
							{this.renderMyLocation()}
						</div>
						<div className="is-size-6">
							<span className="icon">
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
						<ul className="">
							{this.renderMyHighSchool()}
							<br />
							{this.renderMyUni()}
						</ul>
						<br />
						<p className="menu-label">
							<span>University Applications</span>
						</p>
						<ul className="menu-list">
							<li>{this.createUniversityList()}</li>
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

const mapDispatchToProps = { getUni, getCity };

function mapStateToProps(state) {
	return {
		auth: state.auth
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Dashboard);
