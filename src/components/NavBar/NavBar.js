import CartWidget from "../CartWidget/CartWidget";
import logo from "../../img/TG.png";
import { NavLink ,Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">
                        <img alt="" src={logo} width="40" height="40" />
                    </Link>

                    <div role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </div>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <div className="navbar-item button is-link is-light">
                            <NavLink to={"/"}>Inicio</NavLink>
                        </div>

                        <div className="navbar-item button is-link is-light">
                            <NavLink to={`/category/Monitores`} className= {({isActive})=>isActive?'ActiveOption':'Option'}>Monitores</NavLink>
                        </div>

                        <div className="navbar-item button is-link is-light">
                            <NavLink to={`/category/Almacenamiento`} className={({isActive})=>isActive?'ActiveOption':'Option'}>Almacenamiento</NavLink>
                        </div>

                    </div>
                    <div className="navbar-item">
                        <CartWidget />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;