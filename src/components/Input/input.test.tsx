import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import { Input } from "./Input";

describe("Input component", () => {
    const handleChange = vi.fn();

    it("Should render correctly", () => {
        render(
            <Input
                id="currency-amount"
                label="Amount"
                type="number"
                value="0"
                onChange={handleChange}
                placeholder="Enter amount"
                validationError={null}
            />
        );

        const inputContainer = screen.getByTestId("currency-amount");
        expect(inputContainer).toBeInTheDocument();
    });

    it("Should be able to render with a validation Error", () => {
      render(
          <Input
              id="currency-amount"
              label="Amount"
              type="number"
              value="0"
              onChange={handleChange}
              placeholder="Enter amount"
              validationError={"please enter a valid number"}
          />
      );

      const validationMessage = screen.getByTestId("validation-error");
      expect(validationMessage).toContainHTML("please enter a valid number");
  });

  it("Should be able to call its onChange property", () => {
    render(
        <Input
            id="currency-amount"
            label="Amount"
            type="number"
            value="0"
            onChange={handleChange}
            placeholder="Enter amount"
            validationError={null}
        />
    );

    const input = screen.getByTestId("input");
    fireEvent.change(input, {target: {value: 'Hello world!'}})
    expect(handleChange).toHaveBeenCalled();
});
});
