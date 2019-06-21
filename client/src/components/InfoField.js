import React from "react";

export default ({ input, label, placeholder, meta: { error, touched } }) => {
	return (
		<div>
			<label className="subtitle is-5">{label}</label>
			<input className="input" {...input} placeholder={placeholder} />
			<div className="has-text-danger">{touched && error}</div>
		</div>
	);
};
