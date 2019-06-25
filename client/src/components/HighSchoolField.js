import React from "react";

export default ({ input, label, options, meta: { error, touched } }) => {
	return (
		<div>
			<label className="subtitle is-5">{label}</label>
			<div className="control has-icons-left">
				<div className="select" {...input}>
					<select>
						<option>Ruamrudee International School</option>
					</select>
				</div>
				<span className="icon is-left">
					<i className="fas fa-school" />
				</span>
			</div>
			<div className="has-text-danger">{touched && error}</div>
		</div>
	);
};
