import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import styles from "./NavBar.module.css";

const NavBar = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark m-4 p-2">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <NavLink to={"/"} className={styles.navbar__brand}>
            <img
              className={styles.navbar__brand__img}
              src={props.logo}
              alt={props.alt}
            ></img>
            LA TIENDA
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/category/0"} className={styles.nav__link}>
                  CLASICOS
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/category/1"} className={styles.nav__link}>
                  COMICS
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/category/2"} className={styles.nav__link}>
                  MANGAS
                </Link>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav md-auto mb-2 mb-lg-0">
            <Link to="/cart">
              <CartWidget cant={6} />
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
