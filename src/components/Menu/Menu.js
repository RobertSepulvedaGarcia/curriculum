import React from "react"
import { Container } from "react-bootstrap"
import { Link } from "gatsby"
import "./Menu.scss"
export default function Menu(props) {
  const { bgColor } = props
  return (
    <header
      className="menu"
      style={{ backgroundColor: bgColor || "transparent" }}
    >
      <Container>
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
      </Container>
    </header>
  )
}
