import logo from "../../img/Logo-mini.png";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

import "./NavBar.css";

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
          <Nav>
            <Link to="/" className="nav-link">
              Inicio
            </Link>
            <Link to="/categoria/1st-choice" className="nav-link">
              1st Choice
            </Link>
            <Link to="/categoria/bravery" className="nav-link">
              Bravery
            </Link>
            <Link to="/categoria/brit-care" className="nav-link">
              Brit-Care
            </Link>
            <Link to="/categoria/nutram" className="nav-link">
              Nutram
            </Link>
            <Link to="/categoria/purina" className="nav-link">
              Purina
            </Link>
            <Link to="/categoria/hills" className="nav-link">
              Hill's
            </Link>
          </Nav>
          <Link to="/cart">
            <CartWidget />
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
