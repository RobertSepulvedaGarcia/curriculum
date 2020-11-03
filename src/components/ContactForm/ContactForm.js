import React from "react"
import { Row, Col, Container, Form, Button } from "react-bootstrap"
import "./ContactForm.scss"

export default function ContactForm() {
  const { Group, Label, Control } = Form
  return (
    <Container className="formulario">
      <Form
        name="contact-form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit="submit"
      >
        <input type="hidden" name="form-name" value="contact-form" />
        <p hidden>
          NO LLENES ESTO!:
          <input name="bot-field" />
        </p>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Group>
              <Label>Nombre:</Label>
              <Control required type="text" name="nombre" />
            </Group>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Group>
              <Label>Apellido:</Label>
              <Control required type="text" name="apellido" />
            </Group>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Group>
              <Label>E-mail:</Label>
              <Control required type="email" name="email" />
            </Group>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Group>
              <Label>¿En qué le puedo ayudar?:</Label>
              <Control required as="textarea" rows="4" name="info" />
            </Group>
          </Col>
          <Col
            style={{ textAlign: "center" }}
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}
