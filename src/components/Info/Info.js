import React from "react"
import { Row, Col, Image, Card } from "react-bootstrap"
import "./Info.scss"
import perfil from "../../images/profile.png"
import Social from "./Social/Social"

export default function Info({ informacion }) {
  return (
    <div className="contenedor">
      <div className="caja" />

      <Card className="box">
        <Row>
          <Col style={{ padding: "0 50px 25px 50px" }} xs={12} md={4}>
            <Image style={{ borderRadius: "50px" }} src={perfil} fluid />
          </Col>
          <Col xs={12} md={8} className="infor__datos">
            <span>HOLA!</span>
            <p>Robert William Sepúlveda García</p>
            <p style={{ color: "white" }}>Programador Junior Full-Stack</p>
            <hr />

            <div className="more-info">
              {informacion.map((datos, index) => (
                <ul key={index} className="item">
                  <li>{datos.title}</li>
                  <li>{datos.info}</li>
                </ul>
              ))}
            </div>
          </Col>
        </Row>
        <Social />
      </Card>
    </div>
  )
}
