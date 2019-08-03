import React, { Component } from "react";
import { connect } from "react-redux";

export class ProfileCard extends Component {
	renderUniversityInfo() {
		const { university, universityGradYear } = this.props.student;

		if (university) {
			return (
				<span>
					{university} ({universityGradYear})
				</span>
			);
		}
		return <span>No university yet</span>;
	}

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
				highSchoolGradYear
			} = this.props.student;

			return (
				<div className="box">
					<aside className="menu">
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
							<i className="fas fa-globe-asia fa-fw" />{" "}
							<span>
								{city}, {country}
							</span>
						</div>
						<div className=" is-size-6">
							<i className="fas fa-book fa-fw" />{" "}
							<span>{major ? major : "No major yet"}</span>
						</div>
						<div className=" is-size-6">
							<i className="far fa-envelope fa-fw" />{" "}
							<span>{email}</span>
						</div>
						<br />
						<div>
							<span className="icon">
								<i className="fas fa-school" />
							</span>{" "}
							<span>
								{highSchool} ({highSchoolGradYear})
							</span>
						</div>
						<br />
						<div>
							<span className="icon">
								<i className="fas fa-university" />
							</span>{" "}
							{this.renderUniversityInfo()}
						</div>
						<br />
						<p className="menu-label">Contact</p>
						<div className="">
							Email: <a href="mailto: {email}">{email}</a>
						</div>
					</aside>
				</div>
			);
		}
		return (
			<div className="box is-italic">
				<div className="columns is-mobile">
					<div className="column is-narrow">
						<span className="icon is-medium has-text-grey">
							<i className="fas fa-info-circle fa-2x" />
						</span>
					</div>
					<div className="column">
						Click on users to display their information here
					</div>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div style={{ position: "sticky", top: "5rem" }}>
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
