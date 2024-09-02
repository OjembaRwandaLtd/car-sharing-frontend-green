import React from "react"
import classNames from "classnames"

interface Prop {
  icon: React.ReactElement
  text: string
  bold?: boolean
}

const IconWithLabel = ({ icon, text, bold }: Prop): React.ReactElement => (
  <div className="font-base flex items-center gap-2 pb-2">
    {icon}
    <p className={classNames("text-lg", { "font-bold": bold })}>{text}</p>
  </div>
)

export default IconWithLabel
