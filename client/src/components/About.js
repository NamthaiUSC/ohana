import React, { Component } from "react";

export class About extends Component {
	renderAboutPage() {
		return (
			<div className="container has-background-white">
				<div className="columns is-gapless">
					<div className="column" />
					<div className="column is-three-fifths">
						<div className="box is-shadowless">
							<br />
							<br />
							<h1 className="title is-2 has-text-centered">
								Our mission is to help students find the right
								university.
							</h1>
							<br />
							<p>
								Applying for university can be a daunting
								task; there are so many out there it's
								impossible to know which ones are right for you.
								The best way to learn what a school is like
								seems to be hearing about it from a student
								currently attending the school, but what if you
								don’t know anyone there?
							</p>
							<br />
							<p>
								Ohana hopes to solve this problem by connecting
								high school and university students that have a
								shared background. The shared experience of
								going to the same high school or growing up in
								the same city, for example, serves as a
								launching pad for exchange and conversation. The
								university student can help the high school
								student learn about the university—and perhaps
								even help with the application process—whilst
								building a community.
							</p>
							<br />
							<br />
							<br />
							<br />
							<div className="columns has-text-centered is-mobile">
								<div className="column">
									<span className="icon is-large has-text-danger">
										<i className="fas fa-university fa-5x" />
									</span>
								</div>
								<div className="column">
									<span className="icon is-large has-text-info">
										<i className="fas fa-globe-asia fa-5x" />
									</span>
								</div>
								<div className="column">
									<span className="icon is-large has-text-primary">
										<i className="fas fa-school fa-5x" />
									</span>
								</div>
							</div>
							<br />
							<br />
							<br />
							<br />
							<h1 className="title is-2 has-text-centered">
								Paying It Forward - The Future Of Ohana
							</h1>
							<br />
							<p>
								Applying for university was hard and stressful,
								but looking back at it now I can only see how
								fortunate I was. I went to a private school that
								had world class systems in place to help me
								apply where I wanted. I had upperclassmen and
								mentors that knew the process and could guide me
								through with ease. I had all the support in the
								world from my friends and family.
							</p>
							<br />
							<p>
								But most people don’t have it that easy. There
								are millions of students out there who deserve
								an education better than the one they’re
								getting, and not for a lack of trying. It’s just
								much harder for them because they don’t have the
								same support systems that I was fortunate enough
								to have. One of those is having a mentor that
								can guide them through the application process
								and help them maximize the chances of being
								accepted. I want Ohana to be that for them—a
								platform for those who’ve been through the
								process to help those in need of guidance.
							</p>
							<br />
							<p>
								This starts with us helping students not only by
								talking about what our university is like, but
								also by helping them with the application itself
								(especially helpful for students applying abroad
								that have no idea what to do). It’s a way to
								give back to the community and help those less
								fortunate. A way to pay it forward.
							</p>
							<br />
							<p>
								Ohana means family and family means nobody gets
								left behind or forgotten.
							</p>
							<br />
							<br />
						</div>
					</div>
					<div className="column" />
				</div>
			</div>
		);
	}

	render() {
		return <div>{this.renderAboutPage()}</div>;
	}
}

export default About;
