import React from "react"

interface Prop {
  icon: React.ReactElement
  text: string
  bold?: boolean
}

const IconWithLabel = ({ icon, text, bold }: Prop): React.ReactElement => (
  <div className="font-base flex items-center gap-2 pb-2">
    {icon}
    <p className={`text-lg ${bold ? "font-bold" : ""}`}>{text}</p>
  </div>
)

export default IconWithLabel
