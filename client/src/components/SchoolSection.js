import React, { Component } from "react";
import ProfileBox from "./ProfileBox";
import { connect } from "react-redux";

export class SchoolSection extends Component {
	createStudentBoxes() {
		if (this.props.uni) {
			const { studentsAttending } = this.props.uni;

			let studentsList = [];
			console.log(studentsAttending);
			let count = 0;
			studentsAttending.map(student => {
				studentsList.push(
					<div className="column is-one-fifth">
						<ProfileBox
							key={count}
							id={student._id}
							givenName={student.givenName}
							photoURL={student.photoURL}
							major={student.major}
							highSchoolGradYear={student.highSchoolGradYear}
						/>
					</div>
				);
				count++;
			});

			return <div className="columns">{studentsList}</div>;
		}
		return (
			<div className="notification">
				<span>
					Sorry, we couldn't find any matching students at this time
				</span>{" "}
				<span>
					<i className="far fa-frown" />
				</span>{" "}
				<div>Be sure to check back later as more students join!</div>
			</div>
		);
	}

	renderSchoolInfo() {
		console.log(this.props);
		switch (this.props.uni) {
			case false:
				return (
					<div>
						<div className="columns">
							<div className="column ">
								<div className="title is-2">
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
								<span className="title is-2 has-text-danger">
									Start Your University Search Now!
								</span>{" "}
								<span className="icon is-large has-text-danger">
									<i className="fas fa-arrow-up fa-3x" />
								</span>
							</div>
						</div>
					</div>
				);
			default:
				const { universityName, studentsAttending } = this.props.uni;

				return (
					<div>
						<div>
							<span className="title is-2 has-text-danger">
								{universityName}
							</span>{" "}
							<span className="icon is-large has-text-danger">
								<i className="fas fa-university fa-3x" />
							</span>
						</div>
					</div>
				);
		}
	}

	renderHighSchoolLevel() {
		return (
			<div>
				<div>
					<span className="subtitle is-5 is-italic">
						Also went to
					</span>
					{"  "}
					<span className="icon is-large has-text-primary">
						<i className="fas fa-school fa-2x" />
					</span>{" "}
					<span className="title is-3 has-text-primary">
						Ruamrudee International School
					</span>
				</div>
				<br />
				{this.createStudentBoxes()}
			</div>
		);
	}

	renderCityLevel() {
		return (
			<div>
				<div>
					<span className="subtitle is-5 is-italic">Also from</span>{" "}
					<span className="icon is-large has-text-info">
						<i className="fas fa-globe-asia fa-2x" />
					</span>{" "}
					<span className="title is-3 has-text-info">
						{this.props.auth ? this.props.auth.city : "city"}
					</span>
				</div>
				<br />
				{this.createStudentBoxes()}
			</div>
		);
	}

	renderGeneralLevel() {
		return (
			<div>
				<div>
					<span className="subtitle is-5 is-italic">
						Others attending
					</span>{" "}
					<span className="icon is-large has-text-danger">
						<i className="fas fa-university fa-2x" />
					</span>{" "}
					<span className="title is-3 has-text-danger">
						{this.props.uni ? this.props.uni.universityName : "uni"}
					</span>
				</div>
				<br />
				{this.createStudentBoxes()}
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
				<br />
				<div>{this.renderGeneralLevel()}</div>
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
