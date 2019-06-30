import React, { Component } from "react";
import { connect } from "react-redux";
import { getStudent } from "../actions";

export class ProfileBox extends Component {
	state = {
		highlight: false
	};

	render() {
		const {
			id,
			givenName,
			familyName,
			photoURL,
			major,
			highSchoolGradYear
		} = this.props;

		return (
			<a>
				<div
					className={
						this.state.highlight
							? "box has-text-centered has-background-light"
							: "box has-text-centered"
					}
					onClick={() => this.props.getStudent(id)}
					onMouseEnter={() => this.setState({ highlight: true })}
					onMouseLeave={() => this.setState({ highlight: false })}
				>
					<figure className="image is-96x96 is-inline-block">
						<img
							className="is-rounded"
							src={photoURL}
							alt="Placeholder"
						/>
					</figure>
					<p>
						{givenName} {familyName}
					</p>
					<p>{highSchoolGradYear}</p>
					<p>{major}</p>
				</div>
			</a>
		);
	}
}
const mapDispatchToProps = { getStudent };

export default connect(
	null,
	mapDispatchToProps
)(ProfileBox);
