import { ChevronDownIcon } from "../../../assets"
import { InputDropdown } from "../../../util/props/inputField"

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
export default Dropdown
