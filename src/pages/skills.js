import React from "react"
import { Container } from "react-bootstrap"
import LayoutBasic from "../layouts/LayoutBasic"
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
    <LayoutBasic menuColor="black">
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
