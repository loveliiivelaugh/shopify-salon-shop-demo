import React, { useEffect } from "react"
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"

import Products from "./Products"
import Cart from "./Cart"
import ProductView from "./ProductView"

import { useShopify } from "./../../../hooks"

import './ProductsSection.scss'

export default (props) => {
	const {
		createShop,
		createCheckout,
		fetchProducts,
		// fetchCollection,
	} = useShopify()

	useEffect(() => {
		createShop()
		fetchProducts()
		createCheckout()
		// fetchCollection()
	}, [])

	return (
		<Router>
			<div>
				<Route path="/products" component={Products} />
				<Route path="/Product/:productId" component={ProductView} />
				<Route path="/" component={Cart} />
			</div>
		</Router>
	)
}
