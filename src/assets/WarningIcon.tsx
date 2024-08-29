import { ReactElement } from "react"

interface WarningIconProp {
  className?: string
}

const WarningIcon = ({ className }: WarningIconProp): ReactElement => (
  <div>
    <svg
      width="22"
      height="19"
      viewBox="0 0 22 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.9998 7.00023V11.0002M10.9998 15.0002H11.0098M9.61507 1.89195L1.39019 16.0986C0.933982 16.8866 0.70588 17.2806 0.739593 17.6039C0.768998 17.886 0.916769 18.1423 1.14613 18.309C1.40908 18.5002 1.86435 18.5002 2.77487 18.5002H19.2246C20.1352 18.5002 20.5904 18.5002 20.8534 18.309C21.0827 18.1423 21.2305 17.886 21.2599 17.6039C21.2936 17.2806 21.0655 16.8866 20.6093 16.0986L12.3844 1.89195C11.9299 1.10679 11.7026 0.714207 11.4061 0.582354C11.1474 0.46734 10.8521 0.46734 10.5935 0.582354C10.2969 0.714207 10.0696 1.10679 9.61507 1.89195Z"
        stroke="#F9FAFB"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
)

export default WarningIcon
