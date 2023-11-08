import React, { useState } from "react";
import "./_dropdown.scss";

type option = {
  value: string;
  label: string;
};

interface DropdownProps {
  value: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: option[];
}

export const Dropdown: React.FC<DropdownProps> = ({
  value,
  id,
  onChange,
  options,
}) => {
  const [filteredOptions, setFilteredOptions] = useState<option[]>(options);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchValidationError, setSearchValidationError] = useState<boolean>(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    if (searchValue === "") {
      setFilteredOptions(options);
    } else {
      const filtered = options.filter((option) =>
        option.label.toLowerCase().includes(searchValue.toLowerCase()) || option.value.toLowerCase().includes(searchValue.toLowerCase())
      );

      if (filtered.length === 0) {
        setSearchValidationError(true);
      } else {
        setSearchValidationError(false);
      }

      setFilteredOptions(filtered);
    }
  };

  return (
    <div className="dropdown">
      <input
        className="dropdown__search"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        aria-label="Search options"
      />

      <select
        className="dropdown__select"
        data-testid={id}
        value={value}
        onChange={onChange}
        id={id}
      >
        {filteredOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label} ({option.value})
          </option>
        ))}
      </select>

      {searchValidationError && (
        <p
          className="dropdown__error"
          data-testid="validation-error"
          role="alert"
          aria-live="polite"
        >
          There are no options matching your search
        </p>
      )}
    </div>
  );
};
