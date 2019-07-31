import React, { Component } from "react";

export class Footer extends Component {
	render() {
		return (
			<div>
				<footer className="footer">
					<div className="level container is-size-7">
						<div>
							<div>
								<div>
									Ohana
									<span className="icon">
										<i className="far fa-copyright" />
									</span>
									2019
								</div>
								<div>Contact: namthaih@usc.edu</div>
								<div>
									Feel free to shoot me an email if you have
									any questions or feedback! Everything is
									appreciated :)
								</div>
							</div>
						</div>
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
