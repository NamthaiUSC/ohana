import React, { Component, PureComponent } from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

class ItemRenderer extends PureComponent {
	render() {
		// Access the items array using the "data" prop:
		const item = this.props.data[this.props.index];
		return <div style={this.props.style}>{item}</div>;
	}
}

export class Grid extends Component {
	render() {
		const { itemsArray } = this.props;
		const itemSize = 240;
		return (
			<div style={{ flex: "1 1 auto" }}>
				<AutoSizer disableHeight>
					{({ width }) => (
						<List
							className="List"
							height={
								itemSize *
									(itemsArray.length > 3
										? 3
										: itemsArray.length) +
								30
							}
							itemCount={itemsArray.length}
							itemSize={itemSize}
							width={width}
							itemData={itemsArray}
						>
							{ItemRenderer}
						</List>
					)}
				</AutoSizer>
			</div>
		);
	}
}

export default Grid;
