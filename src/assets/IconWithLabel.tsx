import classNames from "classnames"
import React from "react"

interface Prop {
  icon: React.ReactElement
  text: string
  bold?: boolean
  light?: boolean
}
const IconWithLabel = ({ icon, text, bold, light }: Prop): React.ReactElement => (
  <div className="flex items-center gap-2 pb-2 font-inter text-sm font-normal">
    {icon}
    <p
      className={classNames(
        "text-lg text line-clamp-1",
        { "font-bold": bold },
        { "font-light": light },
      )}
    >
      {text}
    </p>
  </div>
)

export default IconWithLabel
