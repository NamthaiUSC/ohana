import React, { Component } from "react";

export class Footer extends Component {
	render() {
		return (
			<div>
				<footer className="footer has-background-light">
					<div className="content has-text-centered is-size-7">
						<div>
							Ohana
							<span className="icon">
								<i className="far fa-copyright" />
							</span>
							2019
						</div>
						<div>Contact: namthaih@usc.edu</div>
						<div>
							Feel free to shoot me an email if you have any
							questions or feedback! Everything is appreciated :)
						</div>
					</div>
				</footer>
			</div>
		);
	}
}

export default Footer;
