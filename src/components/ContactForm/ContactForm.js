import React from "react"
import { Row, Col, Container, Form, Button } from "react-bootstrap"
import { useForm } from "react-hook-form"
import "./ContactForm.scss"
import Swal from "sweetalert2"
export default function ContactForm() {
  const { Group, Label, Control } = Form

  const { register, handleSubmit, errors } = useForm()

  const onSubmit = (data, e) => {
    console.log(data)
    Swal.fire("Mensaje Enviado", "Respondere a la brevedad!", "success")
    e.target.reset()
  }

  return (
    <Container className="formulario">
      <Form
        name="contact-form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input type="hidden" name="form-name" value="contact-form" />
        <p hidden>
          NO LLENES ESTO!:
          <input name="bot-field" />
        </p>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Group>
              <Label>Nombre*:</Label>
              <Control
                type="text"
                name="nombre"
                ref={register({
                  required: { value: true, message: "Campo obligatorio" },
                })}
              />
              <span style={{ color: "red", fontWeight: "bold" }}>
                {errors?.nombre?.message}
              </span>
            </Group>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Group>
              <Label>Apellido*:</Label>
              <Control
                ref={register({
                  required: { value: true, message: "Campo obligatorio" },
                })}
                type="text"
                name="apellido"
              />
              <span style={{ color: "red", fontWeight: "bold" }}>
                {errors?.apellido?.message}
              </span>
            </Group>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Group>
              <Label>E-mail*:</Label>
              <Control
                ref={register({
                  required: { value: true, message: "Campo obligatorio" },
                })}
                type="email"
                name="email"
              />
              <span style={{ color: "red", fontWeight: "bold" }}>
                {errors?.email?.message}
              </span>
            </Group>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Group>
              <Label>¿En qué le puedo ayudar?*:</Label>
              <Control
                ref={register({
                  required: { value: true, message: "Campo obligatorio" },
                })}
                as="textarea"
                rows="4"
                name="info"
              />
              <span style={{ color: "red", fontWeight: "bold" }}>
                {errors?.info?.message}
              </span>
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
