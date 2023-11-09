import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { CurrencyConverter } from "./CurrencyConverter";

beforeEach(() => {
    vi.resetModules();
});

describe("CurrencyConverter", () => {
    it("renders the component", () => {
        render(<CurrencyConverter />);

        expect(screen.getByTestId("currency-converter")).toBeInTheDocument();
    });

    it("performs currency conversion and displays result", async () => {
        render(<CurrencyConverter />);

        global.fetch = vi.fn().mockResolvedValue({
            ok: true,
            json: () =>
                Promise.resolve({
                    rates: {
                        USD: 1.23,
                    },
                }),
        });

        const inputAmount = screen.getByLabelText("Amount");
        const baseCurrencyDropdown = screen.getByTestId("base-currency");
        const targetCurrencyDropdown = screen.getByTestId("target-currency");
        const convertButton = screen.getByText("Convert");

        fireEvent.change(inputAmount, { target: { value: "100" } });
        fireEvent.change(baseCurrencyDropdown, { target: { value: "GBP" } });
        fireEvent.change(targetCurrencyDropdown, { target: { value: "USD" } });

        fireEvent.click(convertButton);

        await waitFor(() => {
            expect(
                screen.getByTestId("conversion-display")
            ).toBeInTheDocument();
        });
    });

    it("handles API request errors", async () => {
        render(<CurrencyConverter />);

        global.fetch = vi.fn().mockResolvedValue({
            ok: false,
            status: 500,
            statusText: "Internal Server Error",
        });

        const inputAmount = screen.getByLabelText("Amount");
        const baseCurrencyDropdown = screen.getByTestId("base-currency");
        const targetCurrencyDropdown = screen.getByTestId("target-currency");
        const convertButton = screen.getByText("Convert");

        fireEvent.change(inputAmount, { target: { value: "100" } });
        fireEvent.change(baseCurrencyDropdown, { target: { value: "GBP" } });
        fireEvent.change(targetCurrencyDropdown, { target: { value: "USD" } });

        fireEvent.click(convertButton);

        await waitFor(() => {
            expect(screen.getByTestId("request-error")).toBeInTheDocument();
        });
    });

    it("should be able to provide validation if an invalid number is submitted", async () => {
        render(<CurrencyConverter />);

        global.fetch = vi.fn().mockResolvedValue({
            ok: false,
            status: 500,
            statusText: "Internal Server Error",
        });

        const inputAmount = screen.getByLabelText("Amount");
        const baseCurrencyDropdown = screen.getByTestId("base-currency");
        const targetCurrencyDropdown = screen.getByTestId("target-currency");
        const convertButton = screen.getByText("Convert");

        fireEvent.change(inputAmount, { target: { value: "abc" } });
        fireEvent.change(baseCurrencyDropdown, { target: { value: "GBP" } });
        fireEvent.change(targetCurrencyDropdown, { target: { value: "USD" } });

        fireEvent.click(convertButton);

        await waitFor(() => {
            expect(screen.getByTestId("validation-error")).toBeInTheDocument();
        });
    });

    it("should be able to provide validation if an no number is submitted", async () => {
        render(<CurrencyConverter />);

        global.fetch = vi.fn().mockResolvedValue({
            ok: false,
            status: 500,
            statusText: "Internal Server Error",
        });

        const inputAmount = screen.getByLabelText("Amount");
        const baseCurrencyDropdown = screen.getByTestId("base-currency");
        const targetCurrencyDropdown = screen.getByTestId("target-currency");
        const convertButton = screen.getByText("Convert");

        fireEvent.change(inputAmount, { target: { value: "" } });
        fireEvent.change(baseCurrencyDropdown, { target: { value: "GBP" } });
        fireEvent.change(targetCurrencyDropdown, { target: { value: "USD" } });

        fireEvent.click(convertButton);

        await waitFor(() => {
            expect(screen.getByTestId("validation-error")).toBeInTheDocument();
        });
    });
});
