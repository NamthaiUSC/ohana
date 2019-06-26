import React, { Component } from "react";
import Select, { createFilter } from "react-select";
import { FixedSizeList as List } from "react-window";

const height = 35;

class MenuList extends Component {
	render() {
		const { options, children, maxHeight, getValue } = this.props;
		const [value] = getValue();
		const initialOffset = options.indexOf(value) * height;

		return (
			<List
				height={height * 8}
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

export class UniField extends Component {
	state = {
		selectedOption: null
	};

	handleChange = selectedOption => {
		this.setState({ selectedOption });
	};

	render() {
		const { selectedOption } = this.state;
		const { data, input, currentSchool, label } = this.props;
		return (
			<div>
				<label className="subtitle is-5">{label}</label>
				<Select
					label="Single select"
					{...input}
					options={data}
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
							<i className="fas fa-university" /> {currentSchool}
						</span>
					}
				/>
			</div>
		);
	}
}

export default UniField;
