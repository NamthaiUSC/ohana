import React from "react";
import _ from "lodash";
import Universities from "../data/universities";

export default ({ input, label, currentSchool, meta: { error, touched } }) => {
	console.log("form");
	let universityArray = [];
	let count = 1;
	universityArray.push(<option key={0}>{currentSchool}</option>);
	_.map(Universities, ({ name }) => {
		universityArray.push(<option key={count}>{name} </option>);
		count++;
	});

	return (
		<div>
			<label className="subtitle is-5">{label}</label>
			<div className="control has-icons-left">
				<div className="select" {...input}>
					<select>{universityArray}</select>
				</div>
				<span className="icon is-left">
					<i className="fas fa-university" />
				</span>
			</div>
			<div className="has-text-danger">{touched && error}</div>
		</div>
	);
};
