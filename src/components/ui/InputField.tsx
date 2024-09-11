import { ReactElement, useState } from "react"
import { ChevronDownIcon } from "../../assets"
import classNames from "classnames"
import { InputFieldProps } from "../../util/props/inputField"

const InputField = ({
  key,
  span,
  title,
  name,
  icon,
  placeholder,
  dropdownData,
  value,
  setForm,
  onChange,
}: InputFieldProps): ReactElement => {
  const [showDropdown, setShowDropdown] = useState(true)

  return (
    <div className={classNames({ "col-span-1 ml-1": span }, { "col-span-2": !span })} key={key}>
      <div className="label">
        {title && (
          <label className="label-text font-inter text-sm text-white" htmlFor={title}>
            {title}
          </label>
        )}
      </div>
      <div className="input">
        {icon}
        <input
          className=""
          onChange={onChange}
          value={value}
          type="text"
          name={name}
          placeholder={placeholder}
          readOnly={dropdownData ? true : false}
          required
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
                        setForm(prev => ({ ...prev, [name]: item }))
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
