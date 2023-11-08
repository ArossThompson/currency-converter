import { useState, useEffect } from "react";

import { Input } from "../Input/Input";
import { Dropdown } from "../Dropdown/Dropdown";
import { CurrencyDisplay } from "./CurrencyDisplay/CurrencyDisplay";

import {
    currencyOptionsArray,
    currencyValueValidator,
    convertCurrency,
} from "./CurrencyConverter.util";

export const CurrencyConverter = () => {
    const [inputAmount, setInputAmount] = useState<string>("0");
    const [inputError, setInputError] = useState<string | null>(null);

    const [baseRate, setBaseRate] = useState<string>("GBP");
    const [targetRate, setTargetRate] = useState<string>("USD");

    const [targetAmount, setTargetAmount] = useState<string | null>(null);

    const [requestError, setRequestError] = useState<boolean>(false);

    const handleCurrencyValueChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setInputAmount(e.target.value);
    };

    const handleConversionSelectionChange = (
        e: React.ChangeEvent<HTMLSelectElement>,
        startingCurrency: boolean
    ): void => {
        startingCurrency
            ? setBaseRate(e.target.value)
            : setTargetRate(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (currencyValueValidator(inputAmount)) {
            setInputError(`${inputAmount} is not a valid number`);
            return;
        }

        setInputError(null);
        handleConversionRequest();
    };

    const handleConversionRequest = async () => {
        try {
            const response = await fetch(
                `https://open.er-api.com/v6/latest/${baseRate}`
            );

            if (!response.ok) {
                setRequestError(true);
                throw new Error(`HTTP Error: ${response.status}`);
            }

            const data = await response.json();
            const targetAmount = convertCurrency(
                +data.rates[targetRate],
                +inputAmount
            );

            setTargetAmount(targetAmount.toString());
            setRequestError(false);
        } catch (error) {
            console.error(error);
            setRequestError(true);
        }
    };

    useEffect(() => {
        const exchangeTimer = setInterval(() => {
            setTargetAmount(null);
        }, 10000);

        // clean up
        return () => clearInterval(exchangeTimer);
    }, [targetAmount]);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Input
                    id="currency-amount"
                    label="Amount"
                    type="text"
                    value={inputAmount}
                    onChange={handleCurrencyValueChange}
                    placeholder="Enter amount"
                    validationError={inputError}
                />

                <Dropdown
                    options={currencyOptionsArray}
                    value={baseRate}
                    onChange={(e) => handleConversionSelectionChange(e, true)}
                />
                <Dropdown
                    options={currencyOptionsArray}
                    value={targetRate}
                    onChange={(e) => handleConversionSelectionChange(e, false)}
                />

                <button type="submit" aria-label="Convert">
                    Convert
                </button>
            </form>

            {targetAmount && (
                <CurrencyDisplay
                    inputAmount={inputAmount}
                    baseRate={baseRate}
                    targetAmount={targetAmount}
                    targetRate={targetRate}
                    initialCount={10}
                />
            )}

            {requestError && (
                <p className="error-message" data-testid="validation-error">
                    There was an error with your request, please try again
                </p>
            )}
        </>
    );
};
