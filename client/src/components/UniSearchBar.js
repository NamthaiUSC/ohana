import React, { Component } from "react";
import Select, { createFilter } from "react-select";
import { connect } from "react-redux";
import { FixedSizeList as List } from "react-window";
import { getUni } from "../actions";
import Universities from "../data/universities";

const height = 35;

class MenuList extends Component {
	render() {
		const { options, children, getValue } = this.props;
		const [value] = getValue();
		const initialOffset = options.indexOf(value) * height;

		return (
			<List
				height={height * 20}
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

export class UniSearchBar extends Component {
	state = {
		selectedOption: null
	};

	handleChange = selectedOption => {
		this.setState({ selectedOption });
		console.log(selectedOption.webPage);
		this.props.getUni(selectedOption.value);
	};

	render() {
		const { selectedOption } = this.state;
		return (
			<Select
				label="Single select"
				options={Universities.map(university => ({
					label: university.name,
					value: university.name,
					country: university.country,
					webPage: university.web_pages[0]
				}))}
				value={selectedOption}
				onChange={this.handleChange}
				components={{ MenuList }}
				filterOption={createFilter({ ignoreAccents: false })}
				placeholder={
					<span className="">
						<i className="fas fa-search" /> Search Universities
					</span>
				}
			/>
		);
	}
}

function mapStateToProps(state) {
	return {
		auth: state.auth
	};
}

const mapDispatchToProps = {
	getUni
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UniSearchBar);
