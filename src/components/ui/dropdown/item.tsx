import React from "react"
import { Link } from "react-router-dom"

interface Props {
  icon: React.ReactElement
  text: string
  navlink?: string
  handleClick?: () => void
}

const DropdownItem = ({ icon, text, navlink, handleClick }: Props): React.ReactElement => (
  <li className={"flex justify-start pb-0.5  pt-1 leading-3"} onClick={handleClick}>
    <Link to={navlink || ""} className="-ml-4 truncate flex gap-2 items-center">
      {icon}
      {text}
    </Link>
  </li>
)

export default DropdownItem
