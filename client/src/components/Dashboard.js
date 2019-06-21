import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ProfileForm from "./ProfileForm";

export class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			whichModal: "None"
		};
	}

	renderModal() {
		if (this.state.whichModal !== "None") {
			return (
				<div className="modal is-active">
					<div
						className="modal-background"
						onClick={() => {
							this.setState({ whichModal: "None" });
						}}
					/>
					{this.chooseForm()}
					<button
						className="modal-close is-large"
						aria-label="close"
						onClick={() => {
							this.setState({ whichModal: "None" });
						}}
					/>
				</div>
			);
		}
	}

	chooseForm() {
		switch (this.state.whichModal) {
			case "EditInfo":
				return (
					<div className="modal-content">
						<ProfileForm
							exitModal={() => {
								this.setState({ whichModal: "None" });
							}}
						/>
					</div>
				);

			default:
		}
	}

	renderEditButton() {
		return (
			<button
				className="button is-pulled-right"
				onClick={() => {
					this.setState({ whichModal: "EditInfo" });
				}}
			>
				<span className="icon has-text-link">
					<i className="fas fa-user-cog" />
				</span>
			</button>
		);
	}

	renderMyUni() {
		if (this.props.auth.university) {
			console.log(this.props.auth.university.universityName);
			return (
				<li>
					<Link>
						{this.props.auth.university.universityName} (
						{this.props.auth.universityGradYear} )
					</Link>
				</li>
			);
		}
	}

	renderDashBoard() {
		if (this.props.auth) {
			const {
				givenName,
				familyName,
				email,
				photoURL,
				city,
				major,
				highSchoolGradYear,
				universityGradYear
			} = this.props.auth;
			return (
				<div className="box">
					{this.renderModal()}
					<span className="">{this.renderEditButton()}</span>
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
							<div className="column is-full">
								<div>
									<p className="subtitle is-4">{givenName}</p>
									<p className="title is-4">{familyName}</p>
								</div>
							</div>
						</div>
						<div className=" is-size-6">
							<span className="icon ">
								<i className="fas fa-globe-asia fa-fw" />
							</span>{" "}
							<span>{city}</span>
						</div>
						<div className=" is-size-6">
							<span className="icon ">
								<i className="fas fa-book fa-fw" />
							</span>{" "}
							<span>{major}</span>
						</div>
						<div className=" is-size-6">
							<span className="icon">
								<i className="far fa-envelope fa-fw" />
							</span>{" "}
							<span> {email}</span>
						</div>
						<br />
						<p className="menu-label">My Schools</p>
						<ul className="menu-list">
							<li>
								<Link>
									Ruamrudee International School (
									{highSchoolGradYear} )
								</Link>
							</li>
							{this.renderMyUni()}
						</ul>
						<p className="menu-label">
							My University Applications ({universityGradYear} )
						</p>
						<ul className="menu-list">
							<li>
								<ul>
									<li>
										<Link className="is-active">
											University of Southern California
										</Link>
									</li>
									<li>
										<Link>Chulalongkorn University</Link>
									</li>
									<li>
										<Link>King's College London</Link>
									</li>
								</ul>
							</li>
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

const mapDispatchToProps = {};

function mapStateToProps(state) {
	return {
		auth: state.auth
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Dashboard);
