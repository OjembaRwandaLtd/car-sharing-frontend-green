import { ReactNode } from "react"

const Dropdown = ({ children }: { children: ReactNode }) => (
  <ul
    tabIndex={0}
    className="h-90 menu dropdown-content z-50 mt-10 w-52 rounded-lg bg-primary-200 p-2 text-base text-white shadow"
  >
    {children}
  </ul>
)

export default Dropdown
