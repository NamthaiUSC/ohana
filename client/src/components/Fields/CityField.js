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
				height={height * 6}
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

export class CityField extends Component {
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
					className="button is-small is-italic is-info is-inverted has-text-info has-background-white-bis"
					onClick={() => {
						this.setState({ whichField: "add" });
					}}
				>
					<span className="icon is-small">
						<i className="fas fa-plus" />
					</span>{" "}
					<span>Add new city</span>
				</div>
			);
		} else if (whichField === "add") {
			return (
				<div
					className="button is-small is-italic is-info is-inverted has-text-info has-background-white-bis"
					onClick={() => {
						this.setState({ whichField: "find" });
					}}
				>
					<span className="icon is-small">
						<i className="fas fa-search" />
					</span>{" "}
					<span>Find existing city</span>
				</div>
			);
		}
	}

	renderInfoIcon() {
		return (
			<span
				className="icon is-small has-text-grey-light tooltip is-tooltip-right"
				data-tooltip="Place where you grew up"
			>
				<i className="fas fa-info-circle" />
			</span>
		);
	}

	render() {
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
					<label className="subtitle is-5">{label}</label>
					{this.renderAddButton()}
					{this.renderInfoIcon()}
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
								<i className="fas fa-globe-asia" />{" "}
								{currentValue}
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
					{this.renderInfoIcon()}
					<p className="control has-icons-right">
						<input
							className="input"
							{...input}
							placeholder="Add new city"
						/>
						<span className="icon is-right">
							<i className="fas fa-globe-asia" />
						</span>
					</p>
					<div className="has-text-danger is-italic">
						{touched && error}
					</div>
				</div>
			);
		}
	}
}

export default CityField;
