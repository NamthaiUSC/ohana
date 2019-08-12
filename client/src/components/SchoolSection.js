import React, { Component } from "react";
import ProfileBox from "./ProfileBox";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToApplying, deleteFromApplying } from "../actions";
import UniSearchBar from "./UniSearchBar";
import Grid from "./Grid";

//number of columns to split the profile boxes into
const columns = 4;

export class SchoolSection extends Component {
	//message shown when user has not compeleted their informaiton section
	missingUserInfoMessage() {
		return (
			<div className="box has-background-warning has-text-weight-bold is-italic">
				Press the{" "}
				<span className="icon has-text-link">
					<i className="fas fa-user-cog" />
				</span>{" "}
				edit profile button at the top right hand corner to update your
				info and start searching!
			</div>
		);
	}

	//message shown before user has search any univeristy
	preSearchMessage() {
		return <div className="notification">Search to start!</div>;
	}

	//message shown when no match to shared background filter e.g. no one attending this schooll from the same city
	emptyMatchMessage(sharedBackground) {
		return (
			<div className="notification">
				<span>
					Sorry, we couldn't find any other students from{" "}
					<span> </span>
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

			studentGrid.push(
				<div className="columns is-gapless is-multiline">
					{studentRow}
				</div>
			);
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

	//renders a button to add or delete a uni to/from application list
	AddToApplyingButton() {
		if (!this.props.uni) {
			return <div />;
		}

		const { auth, uni } = this.props;

		const schoolsApplying = auth.universitiesApplying;

		const uniAlreadyInList = schoolsApplying.find(
			element => element.universityName === uni.universityName
		);

		if (uniAlreadyInList) {
			return (
				<div
					className="button is-warning is-small"
					onClick={() =>
						this.props.deleteFromApplying(auth._id, uni._id)
					}
				>
					<span className="icon ">
						<i className="fas fa-minus" />
					</span>{" "}
					<strong>Remove from my Applications</strong>
				</div>
			);
		}

		return (
			<div
				className="button is-danger is-small"
				onClick={() => this.props.addToApplying(auth._id, uni._id)}
			>
				<span className="icon ">
					<i className="fas fa-plus" />
				</span>{" "}
				<strong>Add to my Applications</strong>
			</div>
		);
	}

	renderSchoolInfo() {
		switch (this.props.uni) {
			case null:
				return (
					<div className="has-text-centered">
						<span className="title is-2 has-text-grey-dark">
							Begin your university search here!
						</span>{" "}
					</div>
				);
			default:
				const { universityName, country, webPage } = this.props.uni;

				return (
					<div>
						<div className="has-text-centered">
							<div className="title is-2 has-text-grey-dark">
								{universityName}
							</div>
							<div className="columns">
								<div className="column is-one-fifth" />
								<div className="column is-narrow">
									{this.AddToApplyingButton()}
								</div>
								<div className="column is-narrow ">
									<span className="icon">
										<i className="fas fa-map-marker-alt" />
									</span>{" "}
									{country}
								</div>
								<div className="column is-narrow">
									<a href={webPage}>{webPage}</a>
								</div>
								<div className="column is-one-fifth" />
							</div>
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
					<Link to={this.props.auth ? "/highschoolpage" : "/"}>
						<span className="icon is-large has-text-primary">
							<i className="fas fa-school fa-2x" />
						</span>{" "}
						<span className="title is-3 has-text-primary">
							{this.props.auth.highSchool
								? this.props.auth.highSchool
								: "your high school"}
						</span>
					</Link>
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
					<Link to={this.props.auth ? "/citypage" : "/"}>
						<span className="icon is-large has-text-info">
							<i className="fas fa-globe-asia fa-2x" />
						</span>{" "}
						<span className="title is-3 has-text-info">
							{this.props.auth.city
								? this.props.auth.city
								: "your city"}
						</span>
					</Link>
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
					<Link to={this.props.auth ? "/home" : "/"}>
						<span className="icon is-large has-text-danger">
							<i className="fas fa-university fa-2x" />
						</span>{" "}
						<span className="title is-3 has-text-danger">
							{this.props.uni
								? this.props.uni.universityName
								: "this university"}
						</span>
					</Link>
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
		return (
			<div>
				<div className="">
					<UniSearchBar />
				</div>
				<br />
				<div className="box ">
					<div>{this.renderSchoolInfo()}</div>
					<br />
					<div>{this.renderHighSchoolLevel()}</div>
					<br />
					<div>{this.renderCityLevel()}</div>
					<br />
					<div>{this.renderGeneralLevel()}</div>
				</div>
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

const mapDispatchToProps = { addToApplying, deleteFromApplying };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SchoolSection);
