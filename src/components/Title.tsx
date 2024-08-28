import React from 'react'
import { ChevronBackIcon } from '../assets/ChevronBackIcon'

interface Props {
  title: string
  backButton: boolean
}

const Title = ({ title, backButton }: Props): React.ReactElement => (
  <div>
    {backButton && (
      <button className="btn">
        {' '}
        <ChevronBackIcon />
      </button>
    )}

    <h1>{title} </h1>
  </div>
)

export default Title
