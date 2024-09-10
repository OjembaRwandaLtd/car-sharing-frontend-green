import { ReactElement, useState } from "react"
import { ChevronDownIcon } from "../../assets"

interface Props {
  title?: string
  name: string
  icon?: ReactElement
  placeholder: string
  dropdownData?: string[]
}
const InputField = ({ title, name, icon, placeholder, dropdownData }: Props): ReactElement => {
  const [input, setInput] = useState("")
  const [showDropdown, setShowDropdown] = useState(true)

  return (
    <div className="w-full">
      <div className="label">
        {title && (
          <label className="label-text font-inter text-sm text-white" htmlFor={title}>
            {title}
          </label>
        )}
      </div>
      <div className="input flex items-center gap-2 rounded-full bg-primary-200 px-5 py-6 ">
        {icon}
        <input
          onChange={e => setInput(e.target.value)}
          value={input}
          type="text"
          name={name}
          placeholder={placeholder}
          className="-mt-1 h-14 w-full text-white placeholder:text-white"
        />

        {dropdownData && (
          <div className="dropdown-end dropdown text-white">
            <div tabIndex={0} role="button" className="mr-1">
              <div onClick={() => setShowDropdown(!showDropdown)}>
                <ChevronDownIcon className="scale-150" />
              </div>
              {showDropdown && (
                <ul
                  className="menu dropdown-content z-[1] mt-1
               w-52 gap-1 divide-y-[1px] rounded-box bg-primary-400 p-2"
                  tabIndex={0}
                >
                  {dropdownData.map(item => (
                    <li
                      key={item}
                      onClick={() => {
                        setInput(item)
                        setShowDropdown(!showDropdown)
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default InputField
