import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Footer extends Component {
	render() {
		return (
			<div>
				<footer className="footer">
					<div className="level container is-size-7">
						<div>
							<div className="">
								<div>
									Ohana
									<span className="icon">
										<i className="far fa-copyright" />
									</span>
									2019
								</div>
								<div>
									<Link
										to="/privacypolicy"
										className="has-text-dark"
									>
										Privacy Policy
									</Link>
								</div>
							</div>
						</div>
						<br />
						<div>
							<div>
								Background Photo by Pang Yuhao on Unsplash
							</div>
							<div>
								Favicon made by Vectors Market from
								www.flaticon.com
							</div>
							<div>Icons from Font Awesome</div>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}

export default Footer;
