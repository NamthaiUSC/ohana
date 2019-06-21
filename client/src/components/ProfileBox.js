import React, { Component } from "react";

export class ProfileBox extends Component {
	render() {
		return (
			<div className="box has-text-centered">
				<figure className="image is-96x96 is-inline-block">
					<img
						className="is-rounded"
						src="https://media.licdn.com/dms/image/C5603AQEn3nlc9qlITA/profile-displayphoto-shrink_200_200/0?e=1564617600&v=beta&t=2OWX3P7NlKCo-Py4dFXcWD4YNgKeuxKmrfpgyYjlYck"
						alt="Placeholder"
					/>
				</figure>
				<p>Naman Kedia</p>
				<p>2017</p>
				<p>Computer Science</p>
			</div>
		);
	}
}

export default ProfileBox;
