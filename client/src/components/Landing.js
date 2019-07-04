import React, { Component } from "react";
import SignInButton from "./SignInButton";

class Landing extends Component {
	render() {
		return (
			<div>
				<section className="hero is-fullheight-with-navbar has-background-light">
					<br />
					<br />
					<br />

					<div className="container has-text-centered">
						<h1 className="title is-1 has-text-link">
							Find your university fit now!
						</h1>
						<h1 className="title has-text-grey">
							Talk to{" "}
							<span className="has-text-danger">university</span>{" "}
							students from your{" "}
							<span className="has-text-primary">
								high school
							</span>{" "}
							or <span className="has-text-info">city</span>{" "}
						</h1>
						<br />
						<br />
					</div>
					<div className="columns">
						<div className="column " />
						<div className="column has-text-centered">
							<span className="icon is-large has-text-primary">
								<i className="fas fa-school fa-10x" />
							</span>
						</div>
						<div className="column has-text-centered">
							<span className="icon is-large has-text-link">
								<i className="fas fa-exchange-alt fa-7x" />
							</span>
						</div>
						<div className="column has-text-centered">
							<span className="icon is-large has-text-danger">
								<i className="fas fa-university fa-10x" />
							</span>
							<br />
							<br />
							<br />
							<br />
							<br />
							<SignInButton isLarge={true} />
							<br />
							<br />
							<br />
						</div>
						<div className="column has-text-centered">
							<span className="icon is-large has-text-link">
								<i className="fas fa-exchange-alt fa-7x" />
							</span>
						</div>
						<div className="column has-text-centered">
							<span className="icon is-large has-text-info">
								<i className="fas fa-globe-asia fa-10x" />
							</span>
						</div>
						<div className="column " />
					</div>

					<div className="hero-body has-background-link">
						<div className="container has-text-centered">
							<h1 className="title has-text-white-bis">
								"Ohana means family. Family means nobody gets
								left behind or forgotten."
							</h1>
							<h2 className="subtitle has-text-light">
								-Lilo and Stitch
							</h2>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Landing;
