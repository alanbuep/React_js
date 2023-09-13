import CartWidget from "../CartWidget/CartWidget";
import logo from "../../img/TG.png";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    return (
        <div>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <a className="navbar-brand" href="index.html">
                    <img src={logo} width="100px" alt="Logo" />
                </a>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#link">Componentes</Nav.Link>
                        <Nav.Link href="#link">Monitores</Nav.Link>
                        <Nav.Link href="#link">Notebooks</Nav.Link>
                        <Nav.Link href="#link">Periféricos</Nav.Link>
                        <NavDropdown title="Nosotros" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Dónde estamos?</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Historia</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Preguntas</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Contactenos</NavDropdown.Item>
                        </NavDropdown>
                        
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
            <CartWidget />
        </Navbar>
        </div>
        );
};

export default NavBar;