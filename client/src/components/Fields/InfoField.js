import React from "react";

export default ({
	input,
	label,
	placeholder,
	icon,
	meta: { error, touched }
}) => {
	return (
		<div>
			<label className="subtitle is-5">{label}</label>
			<p className="control has-icons-right">
				<input className="input" {...input} placeholder={placeholder} />
				<span className="icon is-small is-right">{icon}</span>
			</p>
			<div className="has-text-danger is-italic">{touched && error}</div>
		</div>
	);
};
