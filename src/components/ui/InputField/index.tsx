import React, { useState, useEffect, useRef } from "react"
import classNames from "classnames"
import { InputFieldProps } from "../../../util/props/inputField"
import { useErrorContext } from "../../sections/AddCar"
import DropdownData from "./DropdownData"

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
}: InputFieldProps) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const [inputError, setInputError] = useState(false)
  const { setInputHasErrors } = useErrorContext()
  const inputRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node))
        setShowDropdown(false)
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e)
    // Check if a string contains at least 3 characters and has alphabet characters and some allowed characters -"@ and whitespace
    const isValid = type === "number" || /^[a-z\d-'"@\s]{3,}$/i.test(e.target.value)
    setInputError(!isValid)
    setInputHasErrors(!isValid)
  }

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (dropdownData && dropdownData.length > 1) setShowDropdown(prev => !prev)
  }

  return (
    <div className={classNames({ "col-span-2": !span, "col-span-1 ml-1": span })} key={key}>
      {title && (
        <label className="label-text font-inter text-sm text-white" htmlFor={name}>
          {title}
        </label>
      )}
      <div
        ref={inputRef}
        className={classNames("input relative", { "border-2 border-Lachs": inputError })}
      >
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
          <DropdownData
            showDropdown={showDropdown}
            handleDropdownItemClick={(item: string) => {
              setForm(prev => ({ ...prev, [name]: item }))
              setShowDropdown(false)
            }}
            dropdownData={dropdownData}
            handleClick={handleClick}
          />
        )}
      </div>
    </div>
  )
}

export default InputField
