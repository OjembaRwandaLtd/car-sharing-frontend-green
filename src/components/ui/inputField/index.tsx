import React, { useState, useEffect, useRef } from "react"
import classNames from "classnames"
import { InputFieldProps } from "../../../util/props/inputField"
import { useErrorContext } from "../../sections/AddCar"
import Dropdown from "./Dropdown"

const InputField: React.FC<InputFieldProps> = ({
  type = "text",
  span = false,
  title,
  name,
  placeholder,
  dropdownData,
  value,
  setForm,
  onChange,
}) => {
  const { setInputHasErrors } = useErrorContext()
  const [touched, setTouched] = useState(false)
  const [error, setError] = useState("")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const inputRef = useRef<HTMLDivElement>(null)

  const validateInput = (val: string) => {
    const isValid = val.trim() !== ""
    setError(isValid ? "" : "This field is required!")
    setInputHasErrors(!isValid)
    if (isValid) setTouched(false)
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
            onBlur={() => (name === "additional_information" ? null : setTouched(true))}
            value={value}
            type={type}
            name={name}
            placeholder={placeholder}
            readOnly={!!dropdownData}
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
        {touched && error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </label>
    </div>
  )
}

export default InputField
