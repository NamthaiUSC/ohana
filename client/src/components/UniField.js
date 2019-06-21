import React from "react";
import _ from "lodash";
import Universities from "../data/universities";

export default ({
	input,
	label,
	options,
	currentSchool,
	meta: { error, touched }
}) => {
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
			<br />
			<div className="select" {...input}>
				<select>{universityArray}</select>
			</div>
			<div className="has-text-danger">{touched && error}</div>
		</div>
	);
};
