import React from "react"
import "./SobreMi.scss"
import { Container, Button } from "react-bootstrap"
import CV from "../../images/CV_Robert_Sepulveda.pdf"
export default function SobreMi() {
  return (
    <Container className="sobre-mi">
      <p>
        Soy un programador web junior que se está especializando en tecnologías
        de desarrollo web como lo es ReactJS y en generadores basados en esta
        misma como lo es NextJS y GatsbyJS también en las tecnologías de
        Back-End NodeJS MongoDB MySQL aunque mi fuerte es el Front-End. Soy una
        persona autodidacta y muy comprometida con el trabajo, siempre estoy
        dispuesto a aprender nuevas cosas que ayuden a perfeccionarme
        profesionalmente, perseverante ante todo desafío y de rápido
        aprendizaje.
      </p>
      <a href={CV} target="_blank" rel="noreferrer">
        <Button>Revisa mi CV</Button>
      </a>
    </Container>
  )
}
