import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SectionHeader from "./SectionHeader";
import Image from "react-bootstrap/Image";
import "./AboutFeatures.scss";

import Tilt from 'react-tilt';

function Features(props) {
  return (
    <div className="Features">
      {props.items.map((item, index) => (
        <Row className="align-items-center" key={index}>
          <Col xs={12} lg={6}>
            <SectionHeader
              title={item.title}
              description={item.description}
              spaced={true}
              size={3}
              className="text-center text-lg-left"
            />
          </Col>
          <Col>
            <Tilt
              options={{
                reverse: false,
                max: 8,
                perspective: 1000,
                scale: 1,
                speed: 300,
                transition: true,
                axis: null,
                reset: true,
                easing: 'cubic-bezier(.03,.98,.52,.99)',
              }}
            >
              <figure className="Features__image-container">
                <Image src={item.image} alt={item.title} fluid={true} />
              </figure>
            </Tilt>
          </Col>
        </Row>
      ))}
    </div>
  );
}

export default Features;
