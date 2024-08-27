import React from 'react'

interface Props {
  icon: React.ReactElement
  text: string
  navlink?: string
}

const DropdownItem = ({ icon, text, navlink }: Props): React.ReactElement => (
  <li className={`flex justify-between pb-0.5 pt-1 leading-3`}>
    <a href={`${navlink ? navlink : ''}`}>
      {icon}
      {text}
    </a>
  </li>
)

export default DropdownItem
