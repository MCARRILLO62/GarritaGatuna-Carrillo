import logo from "../../img/Logo-mini.png";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

import "./NavBar.css";
import CatListing from "../../helpers/CatListing";

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img className="logoBrand" src={logo} alt="logo" />
            </Link>
          </Navbar.Brand>
          <Nav>{CatListing()}</Nav>
          <Link to="/cart">
            <CartWidget />
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
