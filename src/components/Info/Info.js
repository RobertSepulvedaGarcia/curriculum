import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import "./Info.scss"
import perfil from "../../images/profile.png"
import Social from "./Social/Social"
const datosPersonales = [
  {
    title: "Edad",
    info: "25 Años",
  },
  {
    title: "R.U.N:",
    info: "18.948.939-0",
  },

  {
    title: "Telefono Movil:",
    info: "+56 9 7621 5012",
  },

  {
    title: "E-Mail:",
    info: "robert.sepulveda1995@gmail.com",
  },

  {
    title: "Direccion:",
    info: "AV. Gabriela Mistral N°0360 Quilicura",
  },
]
export default function Info() {
  return (
    <div className="contenedor">
      <div className="caja" />
      <div className="oscurecer" />
      <Container className="box">
        <Row className="infor">
          <Col xs={12} md={4}>
            <Image style={{ borderRadius: "50px" }} src={perfil} fluid />
          </Col>
          <Col xs={12} md={8} className="infor__datos">
            <span>HOLA!</span>
            <p>Robert William Sepúlveda García</p>
            <p style={{ color: "white" }}>Programador Junior Full-Stack</p>
            <hr />
            <div className="more-info">
              {datosPersonales.map((datos, index) => (
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
