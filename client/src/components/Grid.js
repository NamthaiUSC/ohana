import React, { Component, PureComponent } from "react";
import { FixedSizeList as List } from "react-window";

class ItemRenderer extends PureComponent {
	render() {
		// Access the items array using the "data" prop:
		const item = this.props.data[this.props.index];
		return <div className="box is-shadowless">{item}</div>;
	}
}

export class Grid extends Component {
	render() {
		const { itemsArray } = this.props;
		const itemSize = 280;
		return (
			<List
				className="List"
				height={itemSize * (itemsArray.length > 1 ? 2 : 1)}
				itemCount={itemsArray.length}
				itemSize={itemSize}
				width={1000}
				itemData={itemsArray}
			>
				{ItemRenderer}
			</List>
		);
	}
}

export default Grid;
