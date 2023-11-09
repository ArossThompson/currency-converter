import { useState, useEffect } from "react";
import { Input } from "../Input/Input";
import { Dropdown } from "../Dropdown/Dropdown";
import { ConversionDisplay } from "./ConversionDisplay/ConversionDisplay";

import { HiMiniArrowsUpDown } from "react-icons/hi2";

import {
    currencyOptionsArray,
    currencyValueValidator,
    convertCurrency,
} from "../../utils/CurrencyConverter.util";

import "./currencyConverter.scss";

interface RatesResponse {
    rates: {
        [currencyCode: string]: number;
    };
}

export const CurrencyConverter = () => {
    const [inputAmount, setInputAmount] = useState<string>("");
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

    const handleConversionFilterSelection = (value: string, startingCurrency: boolean): void => { 
        startingCurrency
            ? setBaseRate(value)
            : setTargetRate(value);
    };
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (currencyValueValidator(inputAmount)) {
            inputAmount === ""
                ? setInputError("Please enter an amount")
                : setInputError(`${inputAmount} is not a valid number`);
            return;
        }

        setInputError(null);
        handleConversionRequest();
    };

    const handleConversionRequest = async (): Promise<void> => {
        try {
            const response = await fetch(
                `https://open.er-api.com/v6/latest/${baseRate}`
            );

            if (!response.ok) {
                setRequestError(true);
                throw new Error(`HTTP Error: ${response.status}`);
            }

            const data: RatesResponse = await response.json();

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
            setInputAmount("");
        }, 10000);

        // clean up
        return () => clearInterval(exchangeTimer);
    }, [targetAmount]);

    return (
        <div data-testid="currency-converter" className="currency-converter">
            {!targetAmount && (
                <form onSubmit={handleSubmit}>
                    <div className="currency-converter__input">
                        <Input
                            id="currency-amount"
                            label="Amount"
                            type="text"
                            value={inputAmount}
                            onChange={handleCurrencyValueChange}
                            placeholder="Enter amount"
                            validationError={inputError}
                        />

                        <hr />
                    </div>

                    <div className="currency-converter__dropdown">
                        <Dropdown
                            inputId="base-currency-search"
                            inputLabel="Search or select your base currency"
                            id="base-currency"
                            options={currencyOptionsArray}
                            value={baseRate}
                            onChange={(e) =>
                                handleConversionSelectionChange(e, true)
                            }
                            onSearch={(value) => handleConversionFilterSelection(value, true)}
                        />
                    </div>

                    <div className="currency-converter__icon">
                        <HiMiniArrowsUpDown />
                    </div>

                    <div className="currency-converter__dropdown">
                        <Dropdown
                            inputId="target-currency-search"
                            inputLabel="Search or select your target currency"
                            id="target-currency"
                            options={currencyOptionsArray}
                            value={targetRate}
                            onChange={(e) =>
                                handleConversionSelectionChange(e, false)
                            }
                            onSearch={(value) => handleConversionFilterSelection(value, false)}
                        />
                    </div>

                    <button type="submit" aria-label="Convert">
                        Convert
                    </button>
                </form>
            )}

            {targetAmount && (
                <ConversionDisplay
                    inputAmount={inputAmount}
                    baseRate={baseRate}
                    targetAmount={targetAmount}
                    targetRate={targetRate}
                    initialCount={10}
                />
            )}

            {requestError && (
                <p className="error-message" data-testid="request-error">
                    There was an error with your request, please try again
                </p>
            )}
        </div>
    );
};
