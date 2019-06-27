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
					<div className="button is-link is-outlined is-loading">
						Logout
					</div>
				);
			case false:
				return (
					<a
						className="button is-link is-outlined"
						href="/auth/google"
					>
						<strong>Login with Google</strong>
					</a>
				);
			default:
				return (
					<a
						className="button is-link is-outlined"
						href="/api/logout"
					>
						<strong>Logout</strong>
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
						className="button is-pulled-right is-link is-outlined"
						onClick={() => {
							this.setState({ whichModal: "EditInfo" });
						}}
					>
						<span className="icon">
							<i className="fas fa-user-cog" />
						</span>
					</button>
				);
		}
	}

	render() {
		return (
			<nav
				className="navbar has-shadow has-background-white-bis"
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
						<div className="navbar-item">
							<Link
								to={this.props.auth ? "/home" : "/"}
								className=" title is-5 is-tab has-text-link"
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
