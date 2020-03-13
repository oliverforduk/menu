import React, { Component } from 'react';
import MenuList from './MenuList';
import * as apiCalls from './api.js';

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state ={
			menu: {},
			items: []
		}

		this.loadMenu();
	}

	async loadMenu() {
		let menu = await apiCalls.getMenu();
		this.setState({ items: menu.menu.items });
	}

	render() {
		let {items} = this.state;
		return (
			<div className="Menu">
				<MenuList 
					items={items} 
				/>
			</div>
		)
	}
}

export default Menu;