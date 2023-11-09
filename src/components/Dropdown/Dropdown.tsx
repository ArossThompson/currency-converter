import React, { useState } from "react";
import { Input } from "../Input/Input";

import "./dropdown.scss";

type option = {
    value: string;
    label: string;
    flagCode: string;
};

interface DropdownProps {
    inputLabel?: string;
    inputId?: string;
    value: string;
    id: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onSearch: (value: string) => void;
    options: option[];
}

export const Dropdown: React.FC<DropdownProps> = ({
    inputLabel,
    inputId,
    value,
    id,
    onChange,
    onSearch,
    options,
}) => {
    const [filteredOptions, setFilteredOptions] = useState<option[]>(options);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [searchValidationError, setSearchValidationError] =
        useState<boolean>(false);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = e.target.value;
        setSearchTerm(searchValue);

        if (searchValue === "") {
            setFilteredOptions(options);
        } else {
            const filtered = options.filter(
                (option) =>
                    option.label
                        .toLowerCase()
                        .includes(searchValue.toLowerCase()) ||
                    option.value
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
            );

            if (filtered.length === 0) {
                setSearchValidationError(true);
            } else {
                setSearchValidationError(false);
                setFilteredOptions(filtered);
                onSearch(filtered[0].value);
            }
        }
    };

    return (
        <div className="dropdown-container">
            {inputId && inputLabel && (
                <Input
                    id={inputId}
                    label={inputLabel}
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearch}
                    aria-label="Search options"
                    validationError={
                        searchValidationError
                            ? "There are no options matching your search"
                            : null
                    }
                />
            )}

            <select
                className="dropdown-container__select"
                data-testid={id}
                value={value}
                onChange={onChange}
                id={id}
            >
                {filteredOptions.map((option) => (
                    <>
                        <option key={option.value} value={option.value}>
                            <div>
                                {option.label} ({option.value})
                            </div>
                        </option>
                    </>
                ))}
            </select>
        </div>
    );
};
