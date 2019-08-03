import React, { Component } from "react";
import SignInButton from "./SignInButton";

class Landing extends Component {
	render() {
		return (
			<div>
				<section className="hero is-fullheight-with-navbar">
					<div
						className="hero-head has-text-centered box is-shadowless"
						style={{ background: "transparent" }}
					>
						<br />
						<br />
						<h1 className="title is-1 is-spaced">
							Find the right university for you now!
						</h1>
						<h1 className="subtitle is-3">
							And give back to your community by helping kids{" "}
							<br /> from your high school and city learn about
							your university.
						</h1>
					</div>

					<div className="hero-body  container">
						<SignInButton isLarge={true} />
					</div>

					<div className="hero-foot   has-text-centered container">
						<br />
						<br />
						<br />
						<br />

						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
					</div>
				</section>
			</div>
		);
	}
}

export default Landing;
