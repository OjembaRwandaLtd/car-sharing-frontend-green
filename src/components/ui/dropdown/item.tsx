import React from "react"
import { Link } from "react-router-dom"

interface Props {
  icon: React.ReactElement
  text: string
  navlink?: string
}

const DropdownItem = ({ icon, text, navlink }: Props): React.ReactElement => (
  <li className={"flex justify-start pb-0.5  pt-1 leading-3"}>
    <Link to={`${navlink ? navlink : ""}`} className="-ml-4 truncate">
      {icon}
      {text}
    </Link>
  </li>
)

export default DropdownItem
