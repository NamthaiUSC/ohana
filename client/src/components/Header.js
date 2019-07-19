import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ProfileForm from "./ProfileForm";
import SignInButton from "./SignInButton";

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			whichModal: "None",
			burgerActive: false
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

	incompleteProfileCheck() {
		if (this.props.auth) {
			if (!this.props.auth.city) {
				if (this.state.whichModal !== "EditInfo") {
					this.setState({ whichModal: "EditInfo" });
				}
			}
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
						className="button is-link is-inverted"
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

	renderHomeTab() {
		switch (this.props.auth) {
			case null:
				return <div />;
			case false:
				return <div />;
			default:
				return (
					<div>
						<Link
							to={this.props.auth ? "/home" : "/"}
							className=" title is-5 has-text-white"
						>
							Home
						</Link>
					</div>
				);
		}
	}

	render() {
		return (
			<nav
				className="navbar is-fixed-top has-background-link"
				role="navigation"
				aria-label="main navigation"
			>
				{this.incompleteProfileCheck()}
				{this.renderModal()}
				<div className="navbar-brand">
					<div className="navbar-item">
						<Link
							className="title is-2 has-text-white"
							to={this.props.auth ? "/" : "/"}
						>
							<span className="icon is-small" />
							<span className="icon is-medium has-text-white">
								<i className="fas fa-globe-americas" />
							</span>{" "}
							hana
						</Link>
					</div>

					<div
						role="button"
						className={
							"navbar-burger has-text-white burger" +
							(this.state.burgerActive ? " is-active" : "")
						}
						aria-label="menu"
						aria-expanded="false"
						data-target="navbarBasicExample"
						onClick={() => {
							if (this.state.burgerActive) {
								this.setState({ burgerActive: false });
							} else {
								this.setState({ burgerActive: true });
							}
						}}
					>
						<span aria-hidden="true" />
						<span aria-hidden="true" />
						<span aria-hidden="true" />
					</div>
				</div>

				<div
					id="navbarBasicExample"
					className={
						"navbar-menu" +
						(this.state.burgerActive ? "is-active" : "")
					}
				>
					<div className="navbar-start">
						<div className="navbar-item">
							<Link
								to="/about"
								className=" title is-5 has-text-white"
							>
								About
							</Link>
						</div>
						<div className="navbar-item is-tab">
							{this.renderHomeTab()}
						</div>
					</div>
					<div className="navbar-end">
						<div className="navbar-item">
							<div>{this.renderEditButton()}</div>
						</div>
						<div className="navbar-item">
							<SignInButton />
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
