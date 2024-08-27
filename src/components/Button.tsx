import { ReactElement } from 'react'

interface ButtonProp {
  value: string
  type?: 'default' | 'outline' | 'disabled' | 'outlineLachs'
  width?: 'default' | 'regular'
  handleNavigation?: () => void
}

const Button = ({
  value,
  type = 'default',
  width = 'default',
  handleNavigation,
}: ButtonProp): ReactElement => {
  const defaultSyles = 'btn h-11 rounded-full mx-auto font-inter font-bold'
  const buttonWidth = {
    default: 'w-80',
    regular: 'w-44',
  }
  const buttonTypeStyle = {
    default: 'bg-secondary-200 hover:bg-secondary-200 text-primary-800 text-sm ',
    outline:
      'btn-outline hover:bg-transparent hover:border-white hover:text-white border-2 border-white text-white',
    disabled: 'bg-secondary-400 hover:bg-secondary-400 text-primary-800',
    outlineLachs:
      'btn-outline hover:bg-transparent hover:border-Lachs hover:text-Lachs border-2 border-Lachs text-Lachs',
  }
  return (
    <div className="align-center flex">
      <button
        onClick={() => {
          if (handleNavigation) return handleNavigation
        }}
        className={`${defaultSyles} ${buttonWidth[width]} ${buttonTypeStyle[type]}`}
      >
        {value}
      </button>
    </div>
  )
}
export default Button
