import React from "react"
import { Link } from "react-router-dom"

interface Props {
  icon: React.ReactElement
  text: string
  navlink?: string
}

const DropdownItem = ({ icon, text, navlink }: Props): React.ReactElement => (
  <li className={`flex justify-between pb-0.5 pt-1 leading-3`}>
    <Link to={`${navlink ? navlink : ""}`}>
      {icon}
      {text}
    </Link>
  </li>
)

export default DropdownItem
