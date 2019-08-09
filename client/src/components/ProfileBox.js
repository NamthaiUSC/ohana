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
			highSchoolGradYear,
			university
		} = this.props;

		return (
			<a>
				<div
					className={
						this.state.highlight
							? "box has-text-centered has-background-light is-shadowless"
							: "box has-text-centered is-shadowless"
					}
					onClick={() => this.props.getStudent(id)}
					onMouseEnter={() => this.setState({ highlight: true })}
					onMouseLeave={() => this.setState({ highlight: false })}
					style={{ overflowWrap: "break-word" }}
				>
					<figure className="image is-96x96 container">
						<img
							className="is-rounded"
							src={photoURL}
							alt="Placeholder"
						/>
					</figure>
					<p className="has-text-weight-bold">
						{givenName} {familyName}
					</p>
					<p className="has-text-weight-medium">{university}</p>
					<p className="">{major}</p>
					<p className="is-size-7">{highSchoolGradYear}</p>
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
