import React, { Component } from "react";
import ProfileBox from "./ProfileBox";
import { connect } from "react-redux";

export class SchoolSection extends Component {
	createStudentListGeneral() {
		switch (this.props.uni) {
			case null:
				return <div className="notification">Search to start!</div>;
			case false:
				return (
					<div className="notification">
						<span>
							Sorry, we couldn't find any students attending this
							university at this time
						</span>{" "}
						<span>
							<i className="far fa-frown" />
						</span>{" "}
						<div>
							Be sure to check back later as more students join!
						</div>
					</div>
				);
			default:
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
				if (studentsList.length === 0) {
					return (
						<div className="notification">
							<span>
								Sorry, we couldn't find any students attending
								this university at this time
							</span>{" "}
							<span>
								<i className="far fa-frown" />
							</span>{" "}
							<div>
								Be sure to check back later as more students
								join!
							</div>
						</div>
					);
				} else return <div className="columns">{studentsList}</div>;
		}
	}

	createStudentListHighSchool() {
		if (this.props.auth.highSchool) {
			switch (this.props.uni) {
				case null:
					return <div className="notification">Search to start!</div>;
				case false:
					return (
						<div className="notification">
							<span>
								Sorry, we couldn't find any students that also
								attended {this.props.auth.highSchool} at this
								time
							</span>{" "}
							<span>
								<i className="far fa-frown" />
							</span>{" "}
							<div>
								Be sure to check back later as more students
								join!
							</div>
						</div>
					);
				default:
					const { studentsAttending } = this.props.uni;

					let studentsList = [];
					let count = 0;
					studentsAttending.map(student => {
						//only add students from the same high school
						if (student.highSchool === this.props.auth.highSchool) {
							studentsList.push(
								<div className="column is-one-fifth">
									<ProfileBox
										key={count}
										id={student._id}
										givenName={student.givenName}
										photoURL={student.photoURL}
										major={student.major}
										highSchoolGradYear={
											student.highSchoolGradYear
										}
									/>
								</div>
							);
							count++;
						}
					});
					if (studentsList.length === 0) {
						return (
							<div className="notification">
								<span>
									Sorry, we couldn't find any students that
									also attended {this.props.auth.highSchool}{" "}
									at this time
								</span>{" "}
								<span>
									<i className="far fa-frown" />
								</span>{" "}
								<div>
									Be sure to check back later as more students
									join!
								</div>
							</div>
						);
					} else return <div className="columns">{studentsList}</div>;
			}
		} else {
			return (
				<div className="notification is-warning has-text-weight-bold">
					Press the{" "}
					<span className="icon has-text-link">
						<i className="fas fa-user-cog" />
					</span>{" "}
					button at the top right hand corner to add your high school
					and start finding people!
				</div>
			);
		}
	}

	createStudentListCity() {
		if (this.props.auth.city) {
			switch (this.props.uni) {
				case null:
					return <div className="notification">Search to start!</div>;
				case false:
					return (
						<div className="notification">
							<span>
								Sorry, we couldn't find any students from{" "}
								{this.props.auth.city} at this time
							</span>{" "}
							<span>
								<i className="far fa-frown" />
							</span>{" "}
							<div>
								Be sure to check back later as more students
								join!
							</div>
						</div>
					);
				default:
					const { studentsAttending } = this.props.uni;

					let studentsList = [];
					let count = 0;
					studentsAttending.map(student => {
						//only add students in the same city
						if (student.city === this.props.auth.city) {
							studentsList.push(
								<div className="column is-one-fifth">
									<ProfileBox
										key={count}
										id={student._id}
										givenName={student.givenName}
										photoURL={student.photoURL}
										major={student.major}
										highSchoolGradYear={
											student.highSchoolGradYear
										}
									/>
								</div>
							);
							count++;
						}
					});
					if (studentsList.length === 0) {
						return (
							<div className="notification">
								<span>
									Sorry, we couldn't find any students from{" "}
									{this.props.auth.city} at this time
								</span>{" "}
								<span>
									<i className="far fa-frown" />
								</span>{" "}
								<div>
									Be sure to check back later as more students
									join!
								</div>
							</div>
						);
					} else return <div className="columns">{studentsList}</div>;
			}
		} else {
			return (
				<div className="notification is-warning has-text-weight-bold">
					Press the{" "}
					<span className="icon has-text-link">
						<i className="fas fa-user-cog" />
					</span>{" "}
					button on the top right hand corner to add your city and
					start searching!
				</div>
			);
		}
	}

	renderSchoolInfo() {
		console.log(this.props);
		switch (this.props.uni) {
			case false:
				return (
					<div>
						<div className="columns">
							<div className="column ">
								<div className="title is-2 has-text-danger">
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
									Begin your University search now!
								</span>{" "}
							</div>
						</div>
					</div>
				);
			default:
				const { universityName } = this.props.uni;

				return (
					<div>
						<div>
							<span className="title is-2 has-text-danger">
								{universityName}
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
						{this.props.auth.highSchool
							? this.props.auth.highSchool
							: "your high school"}
					</span>
				</div>
				<br />
				{this.createStudentListHighSchool()}
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
						{this.props.auth.city
							? this.props.auth.city
							: "your city"}
					</span>
				</div>
				<br />
				{this.createStudentListCity()}
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
						{this.props.uni
							? this.props.uni.universityName
							: "this university"}
					</span>
				</div>
				<br />
				{this.createStudentListGeneral()}
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
		if (this.props.auth) {
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
		return <div />;
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
