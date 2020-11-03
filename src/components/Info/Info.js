import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import "./Info.scss"
import perfil from "../../images/profile.png"
import Social from "./Social/Social"

export default function Info({ informacion }) {
  return (
    <div className="contenedor">
      <div className="caja" />

      <Container className="box">
        <Row className="infor">
          <Col xs={12} md={4}>
            <Image style={{ borderRadius: "50px" }} src={perfil} fluid />
          </Col>
          <Col xs={12} md={8} className="infor__datos">
            <span>HOLA!</span>
            <p>Fernando el impostor</p>
            <p style={{ color: "white" }}>Programador Junior Full-Stack</p>
            <hr />
            <div className="more-info">
              {informacion.map((datos, index) => (
                <div key={index} className="item">
                  <p>{datos.title}</p>
                  <p>{datos.info}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Social />
      </Container>
    </div>
  )
}
