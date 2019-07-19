import React, { Component } from "react";
import SignInButton from "./SignInButton";

class Landing extends Component {
	render() {
		return (
			<div>
				<section className="hero is-fullheight-with-navbar ">
					<br />
					<br />
					<br />

					<div className="container has-text-centered">
						<h1 className="title is-1 has-text-grey-dark">
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
						<div className="column is-one-quarter" />
						<div className="column has-text-centered">
							<span className="icon is-large has-text-primary">
								<i className="fas fa-school fa-8x" />
							</span>
						</div>
						<div className="column has-text-centered">
							<span className="icon is-large has-text-link">
								<i className="fas fa-exchange-alt fa-6x" />
							</span>
						</div>
						<div className="column has-text-centered">
							<span className="icon is-large has-text-danger">
								<i className="fas fa-university fa-9x" />
							</span>
						</div>
						<div className="column has-text-centered">
							<span className="icon is-large has-text-link">
								<i className="fas fa-exchange-alt fa-6x" />
							</span>
						</div>
						<div className="column has-text-centered">
							<span className="icon is-large has-text-info">
								<i className="fas fa-globe-asia fa-8x" />
							</span>
						</div>
						<div className="column is-one-quarter" />
					</div>
					<div className="container">
						<br />
						<br />
						<SignInButton isLarge={true} />
						<br />
						<br />
					</div>
					<section className="hero is-link is-bold">
						<div className="hero-body">
							<div className="container has-text-centered">
								<h1 className="title">
									"Ohana means family. Family means nobody
									gets left behind or forgotten."
								</h1>
								<h2 className="subtitle">-Lilo and Stitch</h2>
							</div>
						</div>
					</section>
				</section>
			</div>
		);
	}
}

export default Landing;
