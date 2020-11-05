import React from "react"
import { Container } from "react-bootstrap"
import LayoutBasic from "../layouts/LayoutBasic"
import Seo from "../components/Seo/Seo"
import {
  frontendSkills,
  frontendSkillsColors,
  backendSkills,
  backendSkillsColors,
} from "../utils/skills"
import ListSkills from "../components/ListSkills/ListSkills"
import "./skills.scss"

export default function skills() {
  return (
    <LayoutBasic menuColor="rgba(102,205,170,0.2)">
      <Seo titulo="Tecnologias que manejo" />
      <Container className="skills">
        <div className="skills__block">
          <h2>Front-End</h2>
          <ListSkills skills={frontendSkills} colores={frontendSkillsColors} />
        </div>
        <div className="skills__block">
          <h2>Back-End</h2>
          <ListSkills skills={backendSkills} colores={backendSkillsColors} />
        </div>
      </Container>
    </LayoutBasic>
  )
}
