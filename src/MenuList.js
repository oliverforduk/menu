import React, { Component } from 'react';
import MenuItem from './MenuItem';
import './MenuList.css';

class MenuList extends Component {
	// constructor(props) {
	// 	super(props);
	// }

	render() {
		let items = this.props.items.map(i =>
			<MenuItem
				name={i.name}
				details={i.details}
				imageSmall={i.image}
				imageLarge={i.image2}
				price={i.prices.price.price}
				nutrition={i.nutritionLabelling.Item}
			/>
		)
		return (
			<div className="MenuList">
				<div className="Grid">
					{items}
				</div>
			</div>
		)
	}
}

export default MenuList;