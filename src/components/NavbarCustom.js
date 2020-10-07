import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import CarouselSection from "./CarouselSection";
import { useAuth } from "./../util/auth.js";

import Cart from './staging/components/Cart'

import { FaShoppingCart } from "react-icons/md"

function NavbarCustom(props) {
  const auth = useAuth();

  return (
    <>
      <Navbar bg={props.bg} variant={props.variant} expand={props.expand}>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <div style={{display:'flex',alignSelf:'center'}}>
                <img
                  className="d-inline-block align-top"
                  src={props.logo}
                  alt="Logo"
                  height="45"
                />
                <h4>{props.logoTitle}</h4>
              </div>
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Item>
                <LinkContainer to="/">
                  <Nav.Link active={false}>{props.navLabel1}</Nav.Link>
                </LinkContainer>
              </Nav.Item>
              <Nav.Item>
                <LinkContainer to="/about">
                  <Nav.Link active={false}>{props.navLabel2}</Nav.Link>
                </LinkContainer>
              </Nav.Item>
              <NavDropdown id="dropdown" title="Dropdown" alignRight={true}>
                <LinkContainer to="/services">
                  <NavDropdown.Item active={false}>{props.navLabel3}</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to="/single">
                  <NavDropdown.Item active={false}>{props.navLabel4}</NavDropdown.Item>
                </LinkContainer>

                <Dropdown.Divider />

                <LinkContainer to="/products">
                  <NavDropdown.Item active={false}>{props.navLabel5}</NavDropdown.Item>
                </LinkContainer>

              </NavDropdown>
              <Nav.Item>
                <LinkContainer to="/gallery">
                  <Nav.Link active={false}>{props.navLabel6}</Nav.Link>
                </LinkContainer>
              </Nav.Item>
              <Nav.Item>
                <LinkContainer to="/contact">
                  <Nav.Link active={false}>{props.navLabel7}</Nav.Link>
                </LinkContainer>
              </Nav.Item>

              {auth.user && (
                <NavDropdown id="dropdown" title="Account" alignRight={true}>
                  <LinkContainer to="/dashboard">
                    <NavDropdown.Item active={false}>
                    {props.navLabel8}
                    </NavDropdown.Item>
                  </LinkContainer>

                  <LinkContainer to="/settings/general">
                    <NavDropdown.Item active={false}>{props.navLabel9}</NavDropdown.Item>
                  </LinkContainer>

                  <Dropdown.Divider />

                  <LinkContainer to="/auth/signout">
                    <NavDropdown.Item
                      active={false}
                      onClick={(e) => {
                        e.preventDefault();
                        auth.signout();
                      }}
                    >
                      {props.navLabel10}
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}

              {!auth.user && (
                <Nav.Item>
                  <LinkContainer to="/auth/signin">
                    <Nav.Link active={false}>{props.navLabel11}</Nav.Link>
                  </LinkContainer>
                </Nav.Item>
              )}
              {/* <Cart /> */}
              {/* <FaShoppingCart /> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <CarouselSection
        items={[
          {
            image: "http://source.unsplash.com/7v_lSDRaOO0/1200x600",
            caption: "Caption for the first image",
          },
          {
            image: "http://source.unsplash.com/PvCO2IXlXBs/1200x600",
            caption: "Caption for the second image",
          },
          {
            image: "http://source.unsplash.com/KgjcndVr7tU/1200x600",
            caption: "Caption for the third image",
          },
        ]}
      /> */}
    </>
  );
}

export default NavbarCustom;
