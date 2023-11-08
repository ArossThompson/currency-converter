import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Dropdown } from "./Dropdown";

const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
];

describe("Dropdown", () => {
    it("renders the Dropdown component with options", () => {
        const onChange = vi.fn();
        render(
            <Dropdown
                value="option1"
                id="test-dropdown"
                onChange={onChange}
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
        const onChange = vi.fn();
        render(
            <Dropdown
                value="option1"
                id="test-dropdown"
                onChange={onChange}
                options={options}
            />
        );

        const searchInput = screen.getByPlaceholderText("Search...");
        fireEvent.change(searchInput, { target: { value: "Option 2" } });

        const filteredOption = screen.getByText("Option 2 (option2)");
        expect(filteredOption).toBeInTheDocument();
    });

    it("displays an error message if there isn't a matching search", () => {
      const onChange = vi.fn();
      render(
          <Dropdown
              value="option1"
              id="test-dropdown"
              onChange={onChange}
              options={options}
          />
      );

      const searchInput = screen.getByPlaceholderText("Search...");
      fireEvent.change(searchInput, { target: { value: "missing option" } });

      const errorMessage = screen.getByText("There are no options matching your search");
      expect(errorMessage).toBeInTheDocument();
  });
});
