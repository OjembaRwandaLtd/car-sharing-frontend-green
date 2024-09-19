import { ReactElement, useState, useCallback } from "react"
import { ChevronDownIcon } from "../../assets"
import classNames from "classnames"
import { InputFieldProps } from "../../util/props/inputField"
import { useErrorContext } from "../sections/AddCar"

const InputField = ({
  key,
  type = "text",
  span = false,
  title,
  name,
  icon,
  placeholder,
  dropdownData,
  value,
  setForm,
  onChange,
}: InputFieldProps): ReactElement => {
  const [showDropdown, setShowDropdown] = useState(false)
  const [inputError, setInputError] = useState(false)
  const { setInputHasErrors } = useErrorContext()

  const validateInput = useCallback(
    (val: string) => {
      // check if string contains at least 3 chracters and has alphabet chracters and some allowed characters -"@ and whitespace
      const isValid = type === "number" || /^[a-z\d-'"@\s]{3,}$/i.test(val)
      setInputError(!isValid)
      setInputHasErrors(!isValid)
    },
    [type, setInputHasErrors],
  )

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e)
      validateInput(e.target.value)
    },
    [onChange, validateInput],
  )

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      if (dropdownData && dropdownData?.length > 1) setShowDropdown(prev => !prev)
    },
    [dropdownData],
  )

  const handleDropdownItemClick = useCallback(
    (item: string) => {
      setForm(prev => ({ ...prev, [name]: item }))
      setShowDropdown(false)
    },
    [setForm, name],
  )

  return (
    <div className={classNames({ "col-span-2": !span }, { "col-span-1 ml-1": span })} key={key}>
      <label className="label-text font-inter text-sm text-white" htmlFor={name}>
        {title}
      </label>
      <div className={classNames("input relative", { "border-2 border-red-500": inputError })}>
        {icon}
        <input
          onChange={handleInputChange}
          value={value}
          type={type}
          onClick={handleClick}
          name={name}
          placeholder={placeholder}
          readOnly={!!dropdownData}
          required
        />
        {dropdownData && (
          <div className="dropdown-container absolute right-0 top-0 ">
            <button onClick={handleClick} className="dropdown-toggle p-2">
              <ChevronDownIcon className="mr-2 scale-150 text-white" />
            </button>
            {showDropdown && (
              <ul className="input-dropdown menu dropdown-content">
                {dropdownData.map(item => (
                  <li
                    key={item}
                    onClick={() => handleDropdownItemClick(item)}
                    className="hover:bg-primary-500 cursor-pointer p-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default InputField
