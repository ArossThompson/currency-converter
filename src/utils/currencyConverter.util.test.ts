import {
    currencyValueValidator,
    convertCurrency,
} from "./CurrencyConverter.util";
import { describe, it, expect } from "vitest";

describe("Currency Converter Utils", () => {
    describe("currencyValueValidator", () => {
        it("should return true for non-numeric values", () => {
            expect(currencyValueValidator("abc")).toBe(true);
            expect(currencyValueValidator("12x")).toBe(true);
            expect(currencyValueValidator("")).toBe(true);
        });

        it("should return false for valid positive numeric values", () => {
            expect(currencyValueValidator("123")).toBe(false);
            expect(currencyValueValidator("1.23")).toBe(false);
        });
    });

    describe("convertCurrency", () => {
        it("should correctly convert currency", () => {
            // Test conversions
            expect(convertCurrency(1.5, 10)).toBe(15);
            expect(convertCurrency(0.5, 100)).toBe(50);
        });
    });
});
