import React from "react";

export default ({ input, label, options, meta: { error, touched } }) => {
	return (
		<div>
			<label className="subtitle is-5">{label}</label>
			<br />
			<div className="select" {...input}>
				<select>
					<option>Ruamrudee International School</option>
				</select>
			</div>
			<div className="has-text-danger">{touched && error}</div>
		</div>
	);
};
