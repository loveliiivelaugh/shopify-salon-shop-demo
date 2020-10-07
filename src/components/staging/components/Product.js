import React from "react"
import { useShopify } from "./../../../hooks"

import Button from "react-bootstrap/Button";
import './Products.scss'
import './Product.scss'

export default (props) => {
	const { products, fetchProduct } = useShopify()

	function handleClick(e, product_id) {
		e.preventDefault()
		// console.log("Product ID is: " + product_id)
		const id = product_id;
		fetchProduct(id).then((res) => {
			props.history.push(`/Product/${res.id}`);
		})
	}

	return (
		<div className="Product-wrapper">
			{products &&
				products.map((product, i) => {
					const image = product.images[0]
					return (
						<div className="Product" key={product.id + i}>
							{image ? (
								<img style={{maxHeight:'200px'}} src={image.src} alt={`${product.title} product shot`} />
							) : null}
							<div>
								<h4 className="Product__title">{product.title}</h4>
								<p className="Product__price">${product.variants[0].price}</p>
							</div>
							<Button
								color="primary"
								className="Product__buy button"
								onClick={(e) => handleClick(e, product.id)}
							>
								View Details
							</Button>
						</div>
					)
				})}
		</div>
	)
}
