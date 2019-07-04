import React, { Component } from "react";

export class Footer extends Component {
	render() {
		return (
			<div>
				<footer className="footer">
					<div className="content has-text-centered is-size-7">
						<div>
							Ohana
							<span className="icon">
								<i className="far fa-copyright" />
							</span>
							2019
						</div>
						<div>Contact: namthaih@usc.edu</div>
					</div>
				</footer>
			</div>
		);
	}
}

export default Footer;
