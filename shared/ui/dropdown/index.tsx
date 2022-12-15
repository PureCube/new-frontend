import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export interface DropdownOptionProps {
  name: string,
  onClick?: any,
}

export interface DropdownProps {
  options: DropdownOptionProps[],
}

export const Dropdown = ({options}: DropdownProps) => {
	const [isOpened, setIsOpened] = useState(false);

  const toggleDropdown = () => {
    setIsOpened(!isOpened);
  }

	return (
		<>
			<div onClick={toggleDropdown} className="relative z-20 cursor-pointer">
        <FontAwesomeIcon size="xl" icon={faEllipsis} />
      </div>

			{isOpened &&
        <ul onClick={toggleDropdown} className="absolute right-0 z-20 flex flex-col overflow-hidden whitespace-nowrap bg-neutral-800 rounded-2xl mt-2 text-sm md:text-base">
          {
            options.map( (option, index) => {
              return (
                <li key={index} onClick={option.onClick} className="px-5 py-2 hover:bg-neutral-700 cursor-pointer">{option.name}</li>
              )
            })
          }
        </ul>
      }
		</>
	)
}
