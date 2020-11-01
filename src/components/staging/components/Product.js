import React from "react"
import { useShopify } from "./../../../hooks"

import Button from "react-bootstrap/Button";
import './Products.scss'
import './Product.scss'
import Card from "react-bootstrap/Card";

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
  const CardStyles = { 
		border: '2px solid lightGray',
		margin: '5px',
    padding: '10px',
    width: "300px", 
    height: 'auto'
    }

	return (
		<div className="Products-wrapper">
			{products &&
				products.map((product, i) => {
					const image = product.images[0]
					return (
						<Card style={CardStyles}>
							<div className="Product" key={product.id + i}>
								<center>
									{image ? (
										<img style={{maxHeight:'300px'}} src={image.src} alt={`${product.title} product shot`} />
									) : null}
									<div>
										<h4 className="Product__title">{product.title}</h4>
										<p className="Product__price">${product.variants[0].price}</p>
									</div>
										<Button
											className="Product__buy button"
											onClick={(e) => handleClick(e, product.id)}
										>
											View Details
										</Button>
									</center>
							</div>
						</Card>
					)
				})}
		</div>
	)
}
