import React from "react"
interface Prop {
  text: string
}

const ErrorMessage = ({ text }: Prop): React.ReactElement => (
  <div
    role="alert"
    className="alert alert-error m-4 mx-auto my-10 flex w-2/3 items-center justify-center"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 shrink-0 stroke-current"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <span className="font-bold">{text} </span>
  </div>
)

export default ErrorMessage
