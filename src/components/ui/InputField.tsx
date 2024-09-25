import React, { useState, useEffect, useRef } from "react"
import classNames from "classnames"
import { InputDropdown, InputFieldProps } from "../../util/props/inputField"
import { useErrorContext } from "../sections/AddCar"
import { ChevronDownIcon } from "../../assets"

const Dropdown = ({ data, onSelect, isDropdownOpen, setIsDropdownOpen }: InputDropdown) => (
  <>
    <button
      onClick={() => {
        setIsDropdownOpen(!isDropdownOpen)
      }}
      className="dropdown-toggle bg-red-40 absolute right-0 top-0 p-2"
    >
      <ChevronDownIcon className="mr-2 scale-150 text-white" />
    </button>
    {isDropdownOpen && (
      <ul className="input-dropdown menu">
        {data.map(item => (
          <li
            key={item}
            onClick={e => {
              e.preventDefault()
              onSelect(item)
              setIsDropdownOpen(!isDropdownOpen)
            }}
            className="cursor-pointer p-2"
          >
            {item}
          </li>
        ))}
      </ul>
    )}
  </>
)

const InputField: React.FC<InputFieldProps> = ({
  type = "text",
  span = false,
  title,
  error,
  setError,
  touched,
  setTouched,
  name,
  placeholder,
  dropdownData,
  value,
  setForm,
  onChange,
}) => {
  const { setInputHasErrors } = useErrorContext()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const inputRef = useRef<HTMLDivElement>(null)

  const validateInput = (val: string) => {
    const isValid =
      val.trim() !== "" && (dropdownData || type === "number" || /^[a-z\d-'"@\s]{3,}$/i.test(val))
    setError(isValid ? "" : "This field is required")
    setInputHasErrors(!isValid)
  }

  useEffect(() => {
    validateInput(value)
  }, [value, touched])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e)
    setTouched(true)
  }

  const handleInputClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    if (dropdownData && dropdownData.length > 1) setIsDropdownOpen(!isDropdownOpen)
  }

  const handleDropdownSelect = (item: string) => {
    setForm(prev => ({ ...prev, [name]: item }))
    setTouched(true)
    validateInput(item)
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className={classNames({ "col-span-2": !span }, { "col-span-1 ml-1": span })}>
      <label className="label-text font-inter text-sm text-white">
        {title}
        <div
          ref={inputRef}
          className={classNames("input relative", { "border-2 border-red-500": touched && error })}
          onClick={handleInputClick}
        >
          <input
            onChange={handleChange}
            onBlur={() => setTouched(true)}
            value={value}
            type={type}
            name={name}
            placeholder={placeholder}
            readOnly={!!dropdownData}
            max={type === "number" ? "900" : undefined}
            min={type === "number" ? "1" : undefined}
            required
            className="w-full cursor-pointer bg-transparent outline-none"
          />
          {dropdownData && (
            <Dropdown
              data={dropdownData}
              onSelect={handleDropdownSelect}
              isDropdownOpen={isDropdownOpen}
              setIsDropdownOpen={setIsDropdownOpen}
            />
          )}
        </div>
      </label>
    </div>
  )
}

export default InputField
