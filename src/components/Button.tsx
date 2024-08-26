interface ButtonProp {
  value: string
  border: string
  textColor: string
  backgroundColor: string
}
export default function Button({ value, border, textColor }: ButtonProp): React.ReactElement {
  return (
    <button
      className={`h-11 w-80 rounded-3xl font-inter text-sm ${border} ${textColor} text-center `}
    >
      {value}
    </button>
  )
}
