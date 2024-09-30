import classNames from "classnames"
import React from "react"

interface Prop {
  icon: React.ReactElement
  text: string
  bold?: boolean
}
const IconWithLabel = ({ icon, text, bold }: Prop): React.ReactElement => (
  <div className="flex w-full items-center gap-2 pb-2 font-inter text-sm font-normal">
    {icon}
    <p className={classNames("text-lg text line-clamp-1 text-ellipsis ", { "font-bold": bold })}>
      {text}
    </p>
  </div>
)

export default IconWithLabel
