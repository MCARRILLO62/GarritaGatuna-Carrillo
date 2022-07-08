import logo from '../../img/Logo-mini.png'
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import CartWidget from '../CartWidget/CartWidget'

import './NavBar.css'

const NavBar = () => {
  return (
    <>
  <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="/#"><img  className='logoBrand' src={logo} alt='logo'/></Navbar.Brand>
    <Nav>
      <Nav.Link href="/#">Inicio</Nav.Link>
      <NavDropdown title="Categorías" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Rascadores</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Cepillos</NavDropdown.Item>
          <NavDropdown.Item href="#action5">Accesorios</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/#">Juguetes</Nav.Link>
      <Nav.Link href="/#">Snacks</Nav.Link>
      <Nav.Link href="/#">Accesorios</Nav.Link>
      <Nav.Link href="/#">Ofertas</Nav.Link>
      <Nav.Link href="/#">Contacto</Nav.Link>
    </Nav>
    <CartWidget />
    </Container>
  </Navbar>
</>
  )
}

export default NavBar