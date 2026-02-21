import { useState } from 'react';
import { DropdownProps } from './Dropdown.types';

export default function Dropdown({options}: DropdownProps) {

    const [isOpen, setIsOpen] = useState <boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>("Select an option");

    const handleSelection = ()  =>{
        setIsOpen(prev => !prev);
    }

    const handleOptionSelcetion = (option: string) =>{
        setSelectedOption(option);
        setIsOpen(false);
    }

    return(
        <div>
            <div onClick={handleSelection}>{selectedOption?? "Select an option"}</div>
            {isOpen && (
                <div>
                    {options.map((option, index) => (
                        <div key={index} onClick={() => handleOptionSelcetion(option)}>
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
