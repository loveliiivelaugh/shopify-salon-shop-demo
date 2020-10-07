import React from "react"
import Product from "./Product"

import Section from "../../Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "../../SectionHeader";

import './Products.scss'

// data
import { productsPageData } from '../../../util/cms.js';
const data = productsPageData.main;

export default (props) => {
	return (
		<Section
			bg={props.bg}
			textColor={props.textColor}
			size={props.size}
			bgImage={props.bgImage}
			bgImageOpacity={props.bgImageOpacity}
		>
			<Container>
				<SectionHeader
					title={props.title}
					subtitle={props.subtitle}
					size={2}
					spaced={true}
					className="text-center"
				/>
				<h1>{data.title}</h1>
				<div className="Products-wrapper">
					<Product history={props.history} />
				</div>
			</Container>
		</Section>
	)
}
