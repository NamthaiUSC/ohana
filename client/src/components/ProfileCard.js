import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ProfileCard extends Component {
	renderProfileCard() {
		return (
			<div className="box">
				<aside className="menu">
					<div className="columns is-vcentered">
						<div className="column">
							<figure className="image is-128x128">
								<img
									className="is-rounded"
									src="https://media.licdn.com/dms/image/C5603AQEn3nlc9qlITA/profile-displayphoto-shrink_200_200/0?e=1564617600&v=beta&t=2OWX3P7NlKCo-Py4dFXcWD4YNgKeuxKmrfpgyYjlYck"
									alt="Placeholder"
								/>
							</figure>
						</div>
						<div className="column">
							<div>
								<p className="subtitle is-4">Naman</p>
								<p className="title is-3">Kedia</p>
							</div>
						</div>
					</div>
					<div className=" is-size-6">
						<i className="fas fa-globe-asia fa-fw" />{" "}
						<span>Bangkok</span>
					</div>
					<div className=" is-size-6">
						<i className="fas fa-book fa-fw" />{" "}
						<span>Computer Science</span>
					</div>
					<div className=" is-size-6">
						<i className="far fa-envelope fa-fw" />{" "}
						<span> nkedia@usc.edu</span>
					</div>
					<div>
						<span className="icon">
							<i className="fas fa-university" />
						</span>{" "}
						<span>University of southern California (2021)</span>
					</div>
					<div>
						<span className="icon">
							<i className="fas fa-school" />
						</span>{" "}
						<span>Ruamrudee International School (2017)</span>
					</div>
					<br />
					<p className="menu-label">Contact Information</p>
					<ul className="menu-list">
						<li>
							<Link>nkedia@usc.edu</Link>
						</li>
					</ul>
				</aside>
			</div>
		);
	}

	render() {
		return <div>{this.renderProfileCard()}</div>;
	}
}

export default ProfileCard;
