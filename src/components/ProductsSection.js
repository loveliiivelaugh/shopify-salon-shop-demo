import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";

import ProductsSection from "./staging/components/ProductsSection";

import Client from 'shopify-buy';

const client = Client.buildClient({
    storefrontAccessToken: '48733655b3ce7fcfee95c301feb94846',
    domain: 'michael-io.myshopify.com'
});

function UsersSection(props) {
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
      </Container>
      <ProductsSection />
    </Section>
  );
}

export default UsersSection;
