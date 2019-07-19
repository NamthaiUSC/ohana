import React, { Component } from "react";
import { connect } from "react-redux";

export class SignInButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalActive: false
		};
	}

	renderModal() {
		if (this.state.modalActive) {
			return (
				<div className="modal is-active">
					<div
						className="modal-background"
						onClick={() => {
							this.setState({ modalActive: false });
						}}
					/>
					<div className="modal-content">
						<div className="box has-background-light has-text-centered">
							<div className="title has-text-grey-dark">
								Sign In
							</div>
							<div className="is-inline-block">
								<div className="field has-addons">
									<p className="control">
										<a
											className="button is-link is-outlined has-background-white is-medium"
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
											className="button is-link has-text-weight-bold is-medium"
											href="/auth/google"
										>
											Sign in with Google
										</a>
									</p>
								</div>
							</div>
							<br />
							<br />
							<br />
						</div>
					</div>
					<button
						className="modal-close is-large"
						aria-label="close"
						onClick={() => {
							this.setState({ modalActive: false });
						}}
					/>
				</div>
			);
		}
	}

	renderSignIn() {
		switch (this.props.auth) {
			case null:
				return (
					<div className="button is-link is-loading">Sign out</div>
				);
			case false:
				if (this.props.isLarge) {
					return (
						<div
							className="button is-link is-large"
							onClick={() => {
								this.setState({ modalActive: true });
							}}
						>
							<strong>Sign In</strong>
						</div>
					);
				}
				return (
					<div
						className="button is-link is-inverted"
						onClick={() => {
							this.setState({ modalActive: true });
						}}
					>
						<strong>Sign In</strong>
					</div>
				);
			default:
				if (this.props.isLarge) {
					return (
						<a
							className="button is-link is-outlined"
							href="/api/logout"
						>
							<strong>Sign out</strong>
						</a>
					);
				}
				return (
					<a
						className="button is-link is-inverted is-outlined"
						href="/api/logout"
					>
						<strong>Sign out</strong>
					</a>
				);
		}
	}

	render() {
		return (
			<div>
				{this.renderModal()}
				{this.renderSignIn()}
			</div>
		);
	}
}
function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(SignInButton);
