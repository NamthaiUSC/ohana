import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
	renderLogin() {
		switch (this.props.auth) {
			case null:
				return (
					<div className="button is-danger is-loading">Logout</div>
				);
			case false:
				return (
					<a
						className="button is-danger"
						href="/auth/google"
						style={{ color: "white" }}
					>
						<strong>Login with Google</strong>
					</a>
				);
			default:
				return (
					<a
						className="button is-danger"
						href="/api/logout"
						style={{ color: "white" }}
					>
						<strong>Logout</strong>
					</a>
				);
		}
	}

	render() {
		return (
			<nav
				className="navbar is-primary"
				role="navigation"
				aria-label="main navigation"
			>
				<div className="navbar-item" />
				<div className="navbar-brand">
					<Link
						className="title is-2 has-text-danger"
						to={this.props.auth ? "/" : "/"}
					>
						Ohana
					</Link>
				</div>
				<div className="navbar-item" />
				<div id="navbarBasicExample" className="navbar-menu">
					<div className="navbar-start">
						<Link
							to={this.props.auth ? "/home" : "/"}
							className="navbar-item"
						>
							Home
						</Link>
					</div>

					<div className="navbar-end">
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
