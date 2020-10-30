import React from "react"
import { Container, Form, Button } from "react-bootstrap"

export default function ContactForm() {
  const { Group, Label, Control } = Form
  return (
    <Container>
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
        <Group>
          <Label>Nombre:</Label>
          <Control required type="text" name="nombre" />
        </Group>
        <Group>
          <Label>Apellido:</Label>
          <Control required type="text" name="apellido" />
        </Group>
        <Group>
          <Label>E-mail:</Label>
          <Control required type="email" name="email" />
        </Group>
        <Group>
          <Label>¿En qué le puedo ayudar?:</Label>
          <Control required as="textarea" rows="4" name="info" />
        </Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  )
}
