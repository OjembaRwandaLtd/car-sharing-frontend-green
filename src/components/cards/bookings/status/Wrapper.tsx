import { ReactElement, ReactNode } from "react"

interface StatusWrapperProps {
  title?: string
  children: ReactNode
}

const StatusWrapper = ({ title, children }: StatusWrapperProps): ReactElement => (
  <div className="flex flex-col gap-2">
    <p className="text-mustard-800">{title}</p>
    {children}
  </div>
)

export default StatusWrapper
