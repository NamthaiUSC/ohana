import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { updateInfo } from "../actions";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import InfoField from "./InfoField";
import UniField from "./UniField";
import HighSchoolField from "./HighSchoolField";

class ProfileForm extends Component {
	componentDidMount() {
		this.props.initialize(this.props.initialValues);
		console.log(this.props.initialValues);
	}

	renderNameAndCityField() {
		return (
			<div>
				<div className="columns">
					<div className="column">
						<Field
							component={InfoField}
							type="text"
							label="First Name"
							name="givenName"
							placeholder="Jon"
						/>
					</div>
					<div className="column is-one-third">
						<Field
							component={InfoField}
							type="text"
							label="City"
							name="city"
							icon={<i className="fas fa-globe-asia fa-fw" />}
							placeholder="Bangkok"
						/>
					</div>
				</div>
			</div>
		);
	}

	renderHighSchoolField() {
		return (
			<div>
				<div className="columns">
					<div className="column">
						<Field
							component={HighSchoolField}
							type="text"
							label="High School"
							name="highSchool"
						/>
					</div>
					<div className="column is-one-third">
						<Field
							component={InfoField}
							type="number"
							label="Grad Year"
							icon={<i className="fas fa-graduation-cap" />}
							name="highSchoolGradYear"
						/>
					</div>
				</div>
				<br />
			</div>
		);
	}

	renderUniversityField() {
		return (
			<div>
				<div>
					<Field
						component={UniField}
						type="text"
						label="University"
						name="universityName"
						currentSchool={
							this.props.auth.university
								? this.props.auth.university.universityName
								: "None"
						}
					/>
				</div>
				<br />
				<div className="columns">
					<div className="column">
						<Field
							component={InfoField}
							type="text"
							label="Major"
							name="major"
							icon={<i className="fas fa-book fa-fw" />}
							placeholder="Computer Science"
						/>
					</div>
					<div className="column is-one-third">
						<Field
							component={InfoField}
							type="number"
							label="Grad Year"
							icon={<i className="fas fa-graduation-cap" />}
							name="universityGradYear"
						/>
					</div>
				</div>
				<br />
			</div>
		);
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
				{this.renderNameAndCityField()}
				{this.renderHighSchoolField()}
				<div className="notification has-background-grey-lighter is-italic">
					Leave the university field below as "None" if you're still
					in High School.
					<br />
					<br />
					Feel free to fill in your intended major and expected
					graduation date, however.
				</div>
				<br />
				{this.renderUniversityField()}
				<button className="button is-link" type="submit">
					Update
				</button>
			</form>
		);
	}

	render() {
		return (
			<div>
				<div className="notification">
					<p className="title is-3">My Profile</p>
					{this.renderForm()}
				</div>
			</div>
		);
	}
}

function validate(values) {
	const errors = {};

	return errors;
}

function mapStateToProps(state) {
	return {
		initialValues: state.auth,
		auth: state.auth
	};
}

const mapDispatchToProps = {
	updateInfo
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
