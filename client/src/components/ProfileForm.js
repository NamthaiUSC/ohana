import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { updateInfo, getAllHighSchools, getAllCities } from "../actions";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import InfoField from "./Fields/InfoField";
import UniField from "./Fields/UniField";
import HighSchoolField from "./Fields/HighSchoolField";
import CountryField from "./Fields/CountryField";
import CityField from "./Fields/CityField";

class ProfileForm extends Component {
	state = {
		showUniversityFields: false
	};

	componentDidMount() {
		this.props.initialize(this.props.initialValues);
		this.props.getAllHighSchools();
		this.props.getAllCities();
	}

	renderNameField() {
		return (
			<div>
				<div className="columns">
					<div className="column is-half">
						<Field
							component={InfoField}
							type="text"
							label="Given Name"
							name="givenName"
							placeholder="Lilo"
						/>
					</div>
				</div>
			</div>
		);
	}

	renderLocationField() {
		const options = [];
		if (this.props.cities) {
			this.props.cities.forEach(element => {
				options.push({
					value: element.cityName,
					label: element.cityName
				});
			});
		}

		return (
			<div>
				<div className="columns">
					<div className="column ">
						<Field
							component={CityField}
							type="text"
							label="City"
							name="city"
							options={options}
							currentValue={
								this.props.auth.city
									? this.props.auth.city
									: "None"
							}
						/>
					</div>
					<div className="column ">
						<Field
							component={CountryField}
							type="text"
							label="Country"
							name="country"
							currentValue={
								this.props.auth.country
									? this.props.auth.country
									: "None"
							}
						/>
					</div>
				</div>
				<br />
			</div>
		);
	}

	renderHighSchoolField() {
		const options = [];
		if (this.props.highSchools) {
			this.props.highSchools.forEach(element => {
				options.push({
					value: element.highSchoolName,
					label: element.highSchoolName
				});
			});
		}
		return (
			<div>
				<div className="columns">
					<div className="column">
						<Field
							component={HighSchoolField}
							type="text"
							label="High School"
							name="highSchool"
							options={options}
							currentValue={
								this.props.auth.highSchool
									? this.props.auth.highSchool
									: "None"
							}
						/>
					</div>
					<div className="column is-one-third">
						<Field
							component={InfoField}
							type="number"
							label="Grad Year"
							icon={<i className="fas fa-graduation-cap" />}
							name="highSchoolGradYear"
							placeholder={2017}
						/>
					</div>
				</div>
			</div>
		);
	}

	renderUniversityField() {
		if (this.state.showUniversityFields) {
			return (
				<div>
					<div className="columns">
						<div className="column">
							<Field
								component={InfoField}
								type="text"
								label="Major"
								name="major"
								icon={<i className="fas fa-book fa-fw" />}
								placeholder="Basket Weaving"
							/>
						</div>
						<div className="column is-one-third">
							<Field
								component={InfoField}
								type="number"
								label="Grad Year"
								icon={<i className="fas fa-graduation-cap" />}
								name="universityGradYear"
								placeholder={2021}
							/>
						</div>
					</div>
					<div>
						<Field
							component={UniField}
							type="text"
							label="University"
							name="universityName"
							currentValue={
								this.props.auth.university
									? this.props.auth.university.universityName
									: "None"
							}
						/>
					</div>
					<br />
				</div>
			);
		} else {
			return <div />;
		}
	}

	submit(values) {
		values.id = this.props.auth._id;
		this.props.updateInfo(values, this.props.history);
		this.props.exitModal();
	}

	renderForm() {
		return (
			<form
				onSubmit={this.props.handleSubmit(values =>
					this.submit(values)
				)}
			>
				{this.renderNameField()}
				{this.renderHighSchoolField()}
				{this.renderLocationField()}
				{/* <div className="notification is-italic ">
					You may leave the university field below as "None" if you're
					still in high school.
					<br />
					<br />
					Feel free to fill in your intended major and expected
					university graduation date, however.
				</div> */}
				{this.renderSwitch()}
				<br />
				{this.renderUniversityField()}
				<button className="button is-link" type="submit">
					Update
				</button>
			</form>
		);
	}

	renderSwitch() {
		return (
			<div className="field">
				<input
					id="universitySwitch"
					type="checkbox"
					name="universitySwitch"
					className="switch is-rtl is-danger"
					onClick={() => {
						this.setState({
							showUniversityFields: !this.state
								.showUniversityFields
						});
					}}
				/>
				<label htmlFor="universitySwitch">
					Have you attended or are you currently attending university?
				</label>
			</div>
		);
	}

	render() {
		return (
			<div>
				<div className="box has-background-white-bis">
					<p className="title is-3 ">
						My Profile{" "}
						<span className="icon is-large">
							<i className="fas fa-user-cog" />
						</span>
					</p>
					{this.renderForm()}
				</div>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};
	if (!values.givenName) {
		errors["givenName"] = "Sorry, but no faceless men allowed";
	}
	if (!values.city) {
		errors["city"] = "Required field";
	}
	if (!values.country) {
		errors["country"] = "Required field";
	}
	if (!values.highSchool) {
		errors["highSchool"] = "Required field";
	}
	if (!values.highSchoolGradYear) {
		errors["highSchoolGradYear"] = "Required field";
	}
	if (!values.major) {
		errors["major"] = "Required field";
	}
	if (!values.universityGradYear) {
		errors["universityGradYear"] = "Required field";
	}
	if (!values.university) {
		errors["universityName"] = "Required field";
	}

	return errors;
}

function mapStateToProps(state) {
	return {
		initialValues: state.auth,
		auth: state.auth,
		highSchools: state.highSchools,
		cities: state.cities
	};
}

const mapDispatchToProps = {
	updateInfo,
	getAllHighSchools,
	getAllCities
};

ProfileForm = reduxForm({
	validate: validate,
	form: "profileForm",
	enableReinitialize: true
})(ProfileForm);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withRouter(ProfileForm));
