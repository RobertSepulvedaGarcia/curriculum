import React from "react"
import SkillBar from "react-skills-bars"
import "./ListSkills.scss"
export default function ListSkills({ skills, colores }) {
  return (
    <div className="list-skills">
      <SkillBar
        skills={skills}
        colors={colores}
        animationDelay={0}
        animationDuration={1500}
      />
    </div>
  )
}
