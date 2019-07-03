import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export class ProfileCard extends Component {
	renderProfileCard() {
		if (this.props.student) {
			const {
				givenName,
				familyName,
				email,
				photoURL,
				major,
				city,
				country,
				highSchool,
				university,
				highSchoolGradYear,
				universityGradYear
			} = this.props.student;

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
									<p className="title is-3">{familyName}</p>
								</div>
							</div>
						</div>
						<div className=" is-size-6">
							<i className="fas fa-globe-asia fa-fw" />{" "}
							<span>
								{city}, {country}
							</span>
						</div>
						<div className=" is-size-6">
							<i className="fas fa-book fa-fw" />{" "}
							<span>{major}</span>
						</div>
						<div className=" is-size-6">
							<i className="far fa-envelope fa-fw" />{" "}
							<span>{email}</span>
						</div>
						<div>
							<span className="icon">
								<i className="fas fa-school" />
							</span>{" "}
							<span>
								{highSchool} ({highSchoolGradYear})
							</span>
						</div>
						<div>
							<span className="icon">
								<i className="fas fa-university" />
							</span>{" "}
							<span>
								{university.universityName} (
								{universityGradYear})
							</span>
						</div>
						<br />
						<p className="menu-label">Preferred Contact Points</p>
						<ul className="menu-list">
							<li>Email: {email}</li>
						</ul>
					</aside>
				</div>
			);
		}
		return (
			<div className="notification is-italic">
				Click on users to display their information here
			</div>
		);
	}

	render() {
		return (
			<div>
				<br />
				{this.renderProfileCard()}
			</div>
		);
	}
}

function mapStateToProps({ student }) {
	return { student };
}

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProfileCard);
