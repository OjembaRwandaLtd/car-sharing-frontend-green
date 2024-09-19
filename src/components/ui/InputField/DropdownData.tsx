import { ReactElement } from "react"
import { ChevronDownIcon } from "../../../assets"

interface Props {
  handleClick: (e: React.MouseEvent) => void
  showDropdown: boolean
  dropdownData: string[]
  handleDropdownItemClick: (item: string) => void
}
const DropdownData = ({
  handleClick,
  showDropdown,
  dropdownData,
  handleDropdownItemClick,
}: Props): ReactElement => (
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
)

export default DropdownData
