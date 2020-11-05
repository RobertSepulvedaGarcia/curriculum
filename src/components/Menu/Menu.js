import React from "react"
import { Navbar } from "react-bootstrap"
import { Link } from "gatsby"
import "./Menu.scss"
export default function Menu(props) {
  const { bgColor } = props
  return (
    <header
      className="menu"
      style={{ backgroundColor: bgColor || "transparent" }}
    >
      <Navbar expand="lg" variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-center"
          id="basic-navbar-nav"
        >
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/skills">Tecnologias que manejo</Link>
            </li>
            <li>
              <Link to="/contact">Contactame</Link>
            </li>
          </ul>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}
