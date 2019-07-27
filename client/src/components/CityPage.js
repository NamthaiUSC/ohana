import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

import Dashboard from "./Dashboard";
import ProfileCard from "./ProfileCard";
import ProfileBox from "./ProfileBox";
import Grid from "./Grid";
const columns = 3;

export class CityPage extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	//message shown when no students found
	emptyMatchMessage() {
		return (
			<div className="notification">
				<span>
					Sorry, we couldn't find any students from <span> </span>
					your city at this time
				</span>{" "}
				<span>
					<i className="far fa-frown" />
				</span>{" "}
				<div>Be sure to check back later as more students join!</div>
			</div>
		);
	}

	//creates an array of students based on category (highschool or city or general)
	createStudentList() {
		if (this.props.city) {
			const { students } = this.props.city;

			let studentsList = [];
			let count = 0;
			students.forEach(student => {
				const {
					_id,
					givenName,
					familyName,
					photoURL,
					major,
					highSchoolGradYear,
					university
				} = student;
				const studentBox = (
					<div
						className="column is-one-third is-4-mobile"
						key={count}
					>
						<ProfileBox
							key={count}
							id={_id}
							givenName={givenName}
							familyName={familyName}
							photoURL={photoURL}
							major={major}
							highSchoolGradYear={highSchoolGradYear}
							university={university}
						/>
					</div>
				);
				studentsList.push(studentBox);
				count++;
			});

			return studentsList;
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
	createStudentWindow() {
		switch (this.props.city) {
			case null:
				return <div className="title has-text-centered" />;
			default:
				let studentsList = this.createStudentList();
				if (studentsList.length === 0) {
					return this.emptyMatchMessage();
				}
				return (
					<div className="box has-text-centered">
						<div>
							<span className="title">Students from</span>{" "}
							<a>
								<span className="icon is-large has-text-info">
									<i className="fas fa-globe-asia fa-2x" />
								</span>{" "}
								<span className="title has-text-info">
									{this.props.city.cityName}
								</span>
							</a>
						</div>
						<br />
						{this.createStudentGrid(studentsList, columns)}
					</div>
				);
		}
	}

	renderHome() {
		if (this.props.auth && this.props.city) {
			return (
				<div className="container">
					<br />
					<div className="columns">
						<div className="column is-one-fifth is-full-mobile">
							<Dashboard />
						</div>
						<div className="column is-three-fifths is-full-mobile">
							{this.createStudentWindow()}
						</div>
						<div className="column is-one-fifth is-full-mobile">
							<ProfileCard />
						</div>
					</div>
					<br />
				</div>
			);
		}

		return (
			<div className="has-text-centered">
				<section className="hero is-fullheight-with-navbar ">
					<div className="hero-body">
						<div className="container">
							<div className="button is-loading is-link is-large is-size-1 is-outlined is-inverted" />
							<div>Signing In</div>
						</div>
					</div>
				</section>
			</div>
		);
	}

	render() {
		return (
			<div className="has-background-white-bis">{this.renderHome()}</div>
		);
	}
}

const mapDispatchToProps = {
	fetchUser
};

function mapStateToProps(state) {
	return {
		auth: state.auth,
		city: state.city
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CityPage);
