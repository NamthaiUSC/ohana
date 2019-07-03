import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ProfileForm from "./ProfileForm";
import UniSearchBar from "./UniSearchBar";

class Header extends Component {
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

	renderLogin() {
		switch (this.props.auth) {
			case null:
				return (
					<div className="button is-link is-loading">Sign out</div>
				);
			case false:
				return (
					<div className="field has-addons">
						<p className="control">
							<a
								className="button is-link is-outlined has-background-white"
								href="/auth/google"
							>
								<figure className="image is-24x24">
									<img
										src="https://developers.google.com/identity/images/g-logo.png"
										alt="google logo"
									/>
								</figure>
							</a>
						</p>
						<p className="control">
							<a
								className="button is-link has-text-weight-bold is-normal"
								href="/auth/google"
							>
								Sign in with Google
							</a>
						</p>
					</div>
				);
			default:
				return (
					<a
						className="button is-link is-outlined"
						href="/api/logout"
					>
						<strong>Sign out</strong>
					</a>
				);
		}
	}

	renderEditButton() {
		switch (this.props.auth) {
			case null:
				return <div />;
			case false:
				return <div />;
			default:
				return (
					<button
						className="button is-link"
						onClick={() => {
							this.setState({ whichModal: "EditInfo" });
						}}
					>
						<span className="icon">
							<i className="fas fa-user-cog" />
						</span>{" "}
						<strong>Edit Profile</strong>
					</button>
				);
		}
	}

	render() {
		return (
			<nav
				className="navbar box is-paddingless  is-fixed-top"
				role="navigation"
				aria-label="main navigation"
			>
				{this.renderModal()}
				<div className="navbar-item" />
				<div className="navbar-brand">
					<Link
						className="title is-2 has-text-link"
						to={this.props.auth ? "/" : "/"}
					>
						<span className="icon is-medium has-text-link">
							<i className="fas fa-globe-americas" />
						</span>{" "}
						hana
					</Link>
				</div>
				<div className="navbar-item" />
				<div id="navbarBasicExample" className="navbar-menu">
					<div className="navbar-start">
						<div className="navbar-item is-tab">
							<Link
								to={this.props.auth ? "/home" : "/"}
								className=" title is-5 has-text-link"
							>
								Home
							</Link>
						</div>
					</div>

					<div className="navbar-item is-expanded has-text-centered is-inline-block">
						<div
							className="is-inline-block has-text-left"
							style={{ width: "50%" }}
						>
							<UniSearchBar />
						</div>
					</div>
					<div className="navbar-end">
						<div className="navbar-item">
							<div>{this.renderEditButton()}</div>
						</div>
						<div className="navbar-item">
							<div>{this.renderLogin()}</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
