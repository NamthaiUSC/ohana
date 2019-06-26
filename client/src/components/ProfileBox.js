import React, { Component } from "react";

export class ProfileBox extends Component {
	render() {
		const {
			id,
			givenName,
			photoURL,
			major,
			highSchoolGradYear
		} = this.props;

		return (
			<div className="box has-text-centered">
				<figure className="image is-96x96 is-inline-block">
					<img
						className="is-rounded"
						src={photoURL}
						alt="Placeholder"
					/>
				</figure>
				<p>{givenName}</p>
				<p>{highSchoolGradYear}</p>
				<p>{major}</p>
			</div>
		);
	}
}

export default ProfileBox;
