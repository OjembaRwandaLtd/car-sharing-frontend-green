import React from 'react'
interface Props {
  icon: React.ReactElement
  text: string
}

const DropdownItem = ({ icon, text }: Props): React.ReactElement => (
  <li className="flex justify-between">
    <a href="/ok">
      {icon}
      {text}
    </a>
  </li>
)

export default DropdownItem
