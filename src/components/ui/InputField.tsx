import { ReactElement, useState } from "react"
import { ChevronDownIcon } from "../../assets"
import classNames from "classnames"
import { InputFieldProps } from "../../util/props/inputField"
import { useErrorContext } from "../../pages/cars/new"

const InputField = ({
  key,
  type,
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
  const [inputError, setInputError] = useState(false)
  const { setInputHasErrors } = useErrorContext()

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!/^[a-z\d-'"@\s]{3,}$/i.test(e.target.value) && e.target.type !== "number") {
      setInputError(true)
      setInputHasErrors(true)
    } else {
      setInputHasErrors(false)
      setInputError(false)
    }
  }
  return (
    <div className={classNames({ "col-span-1 ml-1": span }, { "col-span-2": !span })} key={key}>
      <div className="label">
        {title && (
          <label className="label-text font-inter text-sm text-white" htmlFor={title}>
            {title}
          </label>
        )}
      </div>
      <div className={classNames("input", { "border-2 border-red-500": inputError })}>
        {icon}
        <input
          onChange={onChange}
          onInput={inputChange}
          value={value}
          type={type}
          name={name}
          placeholder={placeholder}
          readOnly={dropdownData ? true : false}
          required
        />

        {dropdownData && (
          <div className="dropdown dropdown-end text-white">
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
