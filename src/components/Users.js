import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import AspectRatio from "./AspectRatio";
import Image from "react-bootstrap/Image";
import Avatar from "./Avatar";
import "./Users.scss";

import Tilt from 'react-tilt';

function Users(props) {
  return (
    <Row className="justify-content-center">
      {props.items.map((item, index) => (
        <Col xs={12} md={6} lg={4} className="py-3" key={index}>
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
            <Card>
              <AspectRatio ratio={1.5 / 1}>
                <Image src={item.image} fluid={true} />
              </AspectRatio>
            </Card>
          </Tilt>
        </Col>
      ))}
    </Row>
  );
}

export default Users;
