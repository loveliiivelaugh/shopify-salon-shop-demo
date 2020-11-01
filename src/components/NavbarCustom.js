import React, {useEffect} from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
// hooks
import { useAuth } from "./../util/auth.js";
import { useShopify } from "../hooks";
import { useRouter } from "./../util/router.js";

import { MdShoppingCart } from "react-icons/md"
import './staging/components/Cart.scss'

function NavbarCustom(props) {
  const router = useRouter();
  const auth = useAuth();
  //todo go through this useShopify functionality and remove whats not used
  const {
		cartStatus,
		closeCart,
		openCart,
		checkoutState,
		setCount,
	} = useShopify()

	function handleOpen(e) {
    e.preventDefault()
    if (cartStatus === false) {
      console.log("redirect to store page")
      router.push("/products")
    }
    console.log(checkoutState.webUrl)
    console.log("handleOpen function fired.")
    setTimeout(() => {
      openCart()
    }, 1200)
    console.log(cartStatus)
	}

	function handleClose(e) {
		e.preventDefault()
		closeCart()
	}

	function openCheckout(e) {
		e.preventDefault()
		// window.open(checkoutState.webUrl) // opens checkout in a new window
		window.location.replace(checkoutState.webUrl) // opens checkout in same window
	}

	useEffect(() => {
		const button = document.getElementById("cart-button")
		if (cartStatus === true) {
			// button.classList.add("hide")
		} else {
			// button.classList.remove("hide")
		}

		function getCount() {
			let lineItems =
				checkoutState.lineItems && checkoutState.lineItems.length > 0
					? checkoutState.lineItems
					: []
			let count = 0
			lineItems.forEach((item) => {
				count += item.quantity
				return count
			})

			setCount(count)
		}

		getCount()
	}, [cartStatus, checkoutState])


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
              <NavDropdown id="dropdown" title="Shop" alignRight={true}>
                <LinkContainer to="/products">
                  <NavDropdown.Item active={false}>{props.navLabel5}</NavDropdown.Item>
                </LinkContainer>
              <Dropdown.Divider />
                <LinkContainer to="/gallery">
                  <NavDropdown.Item active={false}>{props.navLabel6}</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <Nav.Item>
                <LinkContainer to="/about">
                  <Nav.Link active={false}>{props.navLabel2}</Nav.Link>
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

              <Button id="cart-button" variant="link" className="shopcart-button" onClick={(e) => handleOpen(e)}>
                <MdShoppingCart/>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarCustom;
