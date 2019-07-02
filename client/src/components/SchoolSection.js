import React, { Component } from "react";
import ProfileBox from "./ProfileBox";
import { connect } from "react-redux";
import Grid from "./Grid";

const columns = 4;

export class SchoolSection extends Component {
	//message shown when university not found in database i.e. no one on this platform goes there yet
	noUniFoundMessage() {
		return (
			<div className="notification">
				<span>
					Sorry, we couldn't find any students attending this
					university at this time
				</span>{" "}
				<span>
					<i className="far fa-frown" />
				</span>{" "}
				<div>Be sure to check back later as more students join!</div>
			</div>
		);
	}

	//message shown when user has not compeleted their informaiton section
	missingUserInfoMessage() {
		return (
			<div className="notification is-warning has-text-weight-bold is-italic">
				Press the{" "}
				<span className="icon has-text-link">
					<i className="fas fa-user-cog" />
				</span>{" "}
				button at the top right hand corner to add your high school and
				start searching!
			</div>
		);
	}

	//message shown before user has search any univeristy
	preSearchMessage() {
		return <div className="notification is-size-6">Search to start!</div>;
	}

	//message shown when no match to shared background filter e.g. no one attending this schooll from the same city
	emptyMatchMessage(sharedBackground) {
		return (
			<div className="notification">
				<span>
					Sorry, we couldn't find any students from <span> </span>
					{sharedBackground} at this time
				</span>{" "}
				<span>
					<i className="far fa-frown" />
				</span>{" "}
				<div>Be sure to check back later as more students join!</div>
			</div>
		);
	}

	//creates an array of students based on category (highschool or city or general)
	createStudentList(category) {
		if (this.props.uni) {
			const { studentsAttending } = this.props.uni;

			let studentsListHighSchool = [];
			let studentsListCity = [];
			let studentsListGeneral = [];
			let count = 0;
			studentsAttending.forEach(student => {
				const studentBox = (
					<div className="column is-one-quarter" key={count}>
						<ProfileBox
							key={count}
							id={student._id}
							givenName={student.givenName}
							familyName={student.familyName}
							photoURL={student.photoURL}
							major={student.major}
							highSchoolGradYear={student.highSchoolGradYear}
						/>
					</div>
				);

				if (student.highSchool === this.props.auth.highSchool) {
					studentsListHighSchool.push(studentBox);
				} else if (student.city === this.props.auth.city) {
					studentsListCity.push(studentBox);
				} else {
					studentsListGeneral.push(studentBox);
				}
				count++;
			});

			switch (category) {
				case "HighSchool":
					return studentsListHighSchool;
				case "City":
					return studentsListCity;
				default:
					return studentsListGeneral;
			}
		}
	}

	//turns an array into a react window grid with col columns
	createStudentGrid(studentsList, col) {
		const studentGrid = [];
		//creating a grid to display students
		for (var i = 0; i < studentsList.length; i += col) {
			const studentRow = [];

			//fill up each row until all columns have been filled
			for (var j = 0; j < col; j++) {
				if (i + j >= studentsList.length) {
					break;
				}
				studentRow.push(studentsList[i + j]);
			}

			studentGrid.push(<div className="columns">{studentRow}</div>);
		}

		return (
			<div>
				<Grid itemsArray={studentGrid} />
			</div>
		);
	}

	//manages the student result area
	createStudentWindow(categoryName, categoryValue) {
		if (categoryValue) {
			switch (this.props.uni) {
				case null:
					return this.preSearchMessage();
				case false:
					return this.noUniFoundMessage();
				default:
					let studentsList = this.createStudentList(categoryName);
					if (studentsList.length === 0) {
						return this.emptyMatchMessage(categoryValue);
					}
					return this.createStudentGrid(studentsList, columns);
			}
		} else {
			return this.missingUserInfoMessage();
		}
	}

	renderSchoolInfo() {
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
				{this.createStudentWindow(
					"HighSchool",
					this.props.auth.highSchool
				)}
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
				{this.createStudentWindow("City", this.props.auth.city)}
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
				{this.createStudentWindow(
					"General",
					this.props.uni
						? this.props.uni.universityName
						: "this university"
				)}
			</div>
		);
	}

	render() {
		if (this.props.auth) {
			return (
				<div>
					<br />
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
		return (
			<div className="has-text-centered">
				<br />
				<br />
				<br />
				<br />
				<br />
				<div className="button is-loading is-link is-large is-size-1 is-outlined is-inverted" />
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
