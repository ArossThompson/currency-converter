import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Dropdown } from "./Dropdown";

const options = [
    { value: "option1", label: "Option 1", flagCode: "gb" },
    { value: "option2", label: "Option 2", flagCode: "us" },
    { value: "option3", label: "Option 3", flagCode: "fr" },
];

const onChange = vi.fn();
const onSearch = vi.fn();

describe("Dropdown", () => {
    it("renders the Dropdown component with options", () => {
        
        render(
            <Dropdown
                value="option1"
                id="test-dropdown"
                onChange={onChange}
                onSearch={onSearch}
                options={options}
                
            />
        );

        const dropdown = screen.getByTestId("test-dropdown");
        expect(dropdown).toBeInTheDocument();

        options.forEach((option) => {
            const optionElement = screen.getByText(
                `${option.label} (${option.value})`
            );
            expect(optionElement).toBeInTheDocument();
        });
    });

    it("filters options based on search input", () => {
        
        render(
            <Dropdown
                value="option1"
                id="test-dropdown"
                onChange={onChange}
                onSearch={onSearch}
                options={options}
            />
        );

        const searchInput = screen.getByTestId("test-dropdown");
        fireEvent.change(searchInput, { target: { value: "Option 2" } });

        const filteredOption = screen.getByText("Option 2 (option2)");
        expect(filteredOption).toBeInTheDocument();
    });

    it("if there is no option search it will just display options", () => {
        const onChange = vi.fn();
        render(
            <Dropdown
                value="option1"
                id="test-dropdown"
                onChange={onChange}
                onSearch={onSearch}
                options={options}
            />
        );

        const option = screen.getByText("Option 1 (option1)");
        expect(option).toBeInTheDocument();
    });

    it("displays an error message if there isn't a matching search", () => {
      const onChange = vi.fn();
      render(
          <Dropdown
              value="option1"
              id="test-dropdown"
              onChange={onChange}
              onSearch={onSearch}
              options={options}
              inputId="test-search"
              inputLabel="Search for an option"
          />
      );

      const searchInput = screen.getByPlaceholderText("Search...");
      fireEvent.change(searchInput, { target: { value: "missing option" } });

      const errorMessage = screen.getByTestId("validation-error");
      expect(errorMessage).toBeInTheDocument();
  });
});
