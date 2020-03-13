import React, { Component } from 'react';
import './MenuItem.css';

class MenuItem extends Component {
	render() {
		let { name, details, imageSmall, imageLarge, price, nutrition } = this.props;
		
		return (
			
			<div className="MenuItem">


				<div className="Back">
					<img className="Img-Large" alt={name} src={imageLarge} />
					<img className="Img-Small" alt={name} src={imageSmall}/>

					<div className="Item-Content">
						<h1>{name}</h1>
						<p>{details}</p>
						<p className="Price">{price}</p>
						<div className="Nutrition-Box">
							<div>Energy kj<span className="Float-R">{nutrition.energykj}</span></div>
							<hr />
							<div>Energy kcal<span className="Float-R">{nutrition.energykcal}</span></div>
							<hr />
							<div>Protien<span className="Float-R">{nutrition.protein}</span></div>
							<hr />
							<div>Carbohydrate<span className="Float-R">{nutrition.carbohydrate}</span></div>
							<hr />
							<div>Sugars<span className="Float-R">{nutrition.sugars}</span></div>
							<hr />
							<div>Fat<span className="Float-R">{nutrition.fat}</span></div>
						</div>
					</div>
					<div className="Button-Holder">
						<button>See More</button>
					</div>
				</div>

			</div>
		)
	}
}

export default MenuItem;