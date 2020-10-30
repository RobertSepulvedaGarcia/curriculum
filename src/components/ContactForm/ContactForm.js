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
        onSubmit="submit"
      >
        <Group>
          <Label>Su Nombre:</Label>
          <Control type="text" name="name" />
        </Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  )
}
