import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";


import Button from 'react-bootstrap/Button';
import { Link } from "./../util/router.js";

function HeroSection2(props) {
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
          image="https://images.unsplash.com/photo-1535637603896-07c179d71103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
          alt="Lorem Picsum"
          size={1}
          spaced={true}
          className="text-center"
        />
        <Link to="/about">
          <Button>{props.button}</Button>
        </Link>
      </Container>
    </Section>
  );
}

export default HeroSection2;
