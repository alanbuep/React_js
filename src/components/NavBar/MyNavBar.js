import CartWidget from "../CartWidget/CartWidget";
import logo from "../../img/TG.png";
import { NavLink, Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavBar from 'react-bootstrap/Navbar';

const MyNavBar = () => {
    return (
        <div className="MyNavBar">
            <NavBar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <NavBar.Brand>
                        <Link className="navbar-item" to="/">
                            <img alt="" src={logo} width="70" height="70" />
                        </Link>
                    </NavBar.Brand>
                    <NavBar.Toggle aria-controls="navbarScroll" />
                    <NavBar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link>
                                <NavLink to={"/"} className="nav-link active">Inicio</NavLink>
                            </Nav.Link>

                            <Nav.Link>
                                <NavLink to={`/category/Monitores`} className="nav-link active">Monitores</NavLink>
                            </Nav.Link>

                            <Nav.Link>
                                <NavLink to={`/category/Almacenamiento`} className="nav-link active">Almacenamiento</NavLink>
                            </Nav.Link>
                        </Nav>
                        <div className="navbar-item">
                            <CartWidget />
                        </div>
                    </NavBar.Collapse>
                </Container>
            </NavBar>
        </div>
    );
};

export default MyNavBar;