import React, { Component } from "react";
import Select, { createFilter } from "react-select";
import { FixedSizeList as List } from "react-window";

const height = 35;

class MenuList extends Component {
	render() {
		const { options, children, getValue } = this.props;
		const [value] = getValue();
		const initialOffset = options.indexOf(value) * height;

		return (
			<List
				height={height * 7}
				itemCount={children.length}
				itemSize={height}
				initialScrollOffset={initialOffset}
			>
				{({ index, style }) => (
					<div style={style}>{children[index]}</div>
				)}
			</List>
		);
	}
}

export class HighSchoolField extends Component {
	state = {
		selectedOption: null,
		whichField: "find"
	};

	handleChange = selectedOption => {
		this.setState({ selectedOption });
	};

	renderAddButton() {
		const { whichField } = this.state;
		if (whichField === "find") {
			return (
				<div
					className="button is-small is-italic is-primary is-inverted has-text-primary has-background-white-bis"
					onClick={() => {
						this.setState({ whichField: "add" });
					}}
				>
					<span className="icon is-small">
						<i className="fas fa-plus" />
					</span>{" "}
					<span>Add a new school</span>
				</div>
			);
		} else if (whichField === "add") {
			return (
				<div
					className="button is-small is-italic is-primary is-inverted has-text-primary has-background-white-bis"
					onClick={() => {
						this.setState({ whichField: "find" });
					}}
				>
					<span className="icon is-small">
						<i className="fas fa-search" />
					</span>{" "}
					<span>Find a school</span>
				</div>
			);
		}
	}

	renderField() {
		const { selectedOption, whichField } = this.state;
		const {
			input,
			currentValue,
			label,
			options,
			meta: { error, touched }
		} = this.props;

		if (whichField === "find") {
			return (
				<div>
					<label className="subtitle is-5">{label}</label>{" "}
					{this.renderAddButton()}
					<Select
						label="Single select"
						{...input}
						options={options}
						value={selectedOption}
						onChange={value => {
							this.handleChange();
							input.onChange(value.value);
						}}
						onBlur={() => input.onBlur(input.value)}
						components={{ MenuList }}
						filterOption={createFilter({ ignoreAccents: false })}
						placeholder={
							<span>
								<i className="fas fa-school" /> {currentValue}
							</span>
						}
					/>
					<div className="has-text-danger is-italic">
						{touched && error}
					</div>
				</div>
			);
		} else if (whichField === "add") {
			return (
				<div>
					<label className="subtitle is-5">{label}</label>
					{this.renderAddButton()}
					<p className="control has-icons-right">
						<input
							className="input"
							{...input}
							placeholder="Add a new school"
						/>
						<span className="icon is-right">
							<i className="fas fa-school" />
						</span>
					</p>
					<div className="has-text-danger is-italic">
						{touched && error}
					</div>
				</div>
			);
		}
	}

	render() {
		return <div>{this.renderField()}</div>;
	}
}

export default HighSchoolField;
