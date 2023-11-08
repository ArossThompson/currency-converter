import { useState, useEffect } from "react";

import { Input } from "../Input/Input";
import { Dropdown } from "../Dropdown/Dropdown";

import {
    currencyOptionsArray,
    currencyValueValidator,
    convertCurrency,
} from "./CurrencyConverter.util";

export const CurrencyConverter = () => {
    const [inputAmount, setinputAmount] = useState<string>("0");
    const [inputError, setInputError] = useState<string | null>(null);

    const [baseRate, setBaseRate] = useState<string>("GBP");
    const [targetRate, setTargetRate] = useState<string>("USD");

    const [targetAmount, setTargetAmount] = useState<string | null>(null);
    const [conversionExpiryCount, setConversionExpiryCount] =
        useState<number>(0);

    const handleCurrencyValueChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setinputAmount(e.target.value);
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
            const data = await response.json();
            const targetAmount = convertCurrency(
                +data.rates[targetRate],
                +inputAmount
            );
            setTargetAmount(targetAmount.toString());
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setConversionExpiryCount(10);

        const exchangeTimer = setInterval(() => {
            setTargetAmount(null);
        }, 10000);

        // clean up
        return () => clearInterval(exchangeTimer);
    }, [targetAmount]);

    useEffect(() => {
        const conversionExpiryTimer = setInterval(() => {
            if (conversionExpiryCount > 0) {
                setConversionExpiryCount(conversionExpiryCount - 1);
            }
        }, 1000);

        return () => clearInterval(conversionExpiryTimer);
    }, [conversionExpiryCount]);

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

                <button type="submit">Convert</button>
            </form>

            {targetAmount && (
                <div className="currency-display">
                    <h1>
                        {inputAmount} {baseRate} is equivelant to {targetAmount}{" "}
                        {targetRate}
                    </h1>
                    <p>This will expire in {conversionExpiryCount} seconds</p>
                </div>
            )}
        </>
    );
};
