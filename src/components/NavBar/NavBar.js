import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
  <div className="navBar">
    <div>
        <img src="./images/logo.png" alt="nefredos" width="40"/>
    </div>
    <ul className="options">
      <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/">
      <li className="optionsList">Todos</li>
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/category/women's clothing">
      <li className="optionsList">Mujer</li>
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/category/men's clothing">
      <li className="optionsList">Hombre</li>
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/category/jewelery">
      <li className="optionsList">Joyeria</li>
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/category/electronics">
      <li className="optionsList">Electronica</li>
      </NavLink>
    </ul>
    <div>
      <CartWidget />
    </div>
  </div>
)
}

export default NavBar;