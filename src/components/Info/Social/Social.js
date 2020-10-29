import React from "react"
import "./Social.scss"
import { ReactComponent as LinkedIn } from "../../../images/icons/linkedin.svg"
import { ReactComponent as Facebook } from "../../../images/icons/facebook.svg"
import { ReactComponent as Instagram } from "../../../images/icons/instagram.svg"

const socialMedia = [
  {
    icon: <LinkedIn />,
    link: "https://www.linkedin.com/in/robert-sepulveda-garcia-06786ba1",
  },

  {
    icon: <Facebook />,
    link: "https://www.facebook.com/robert.sepulveda.184/",
  },

  {
    icon: <Instagram />,
    link: "https://www.instagram.com/robert_sepulveda_garcia/",
  },
]
export default function social() {
  return (
    <div className="social">
      {socialMedia.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
        >
          {social.icon}
        </a>
      ))}
    </div>
  )
}
