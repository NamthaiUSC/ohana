import React, { Component, PureComponent } from "react";
import { FixedSizeList as List } from "react-window";

class ItemRenderer extends PureComponent {
	render() {
		// Access the items array using the "data" prop:
		const item = this.props.data[this.props.index];
		return <div className="">{item}</div>;
	}
}

export class Grid extends Component {
	render() {
		const { itemsArray } = this.props;
		const itemSize = 200;
		return (
			<List
				className="List"
				height={
					itemSize * (itemsArray.length > 3 ? 3 : itemsArray.length) +
					30
				}
				itemCount={itemsArray.length}
				itemSize={itemSize}
				width={750}
				itemData={itemsArray}
			>
				{ItemRenderer}
			</List>
		);
	}
}

export default Grid;
