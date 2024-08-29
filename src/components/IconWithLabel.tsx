import React from "react"

interface Prop {
  icon: React.ReactElement
  text: string
}

const IconWithLabel = ({ icon, text }: Prop): React.ReactElement => (
  <div className="font-base flex items-center gap-2 ">
    {icon}
    <p className="">{text} </p>
  </div>
)

export default IconWithLabel
