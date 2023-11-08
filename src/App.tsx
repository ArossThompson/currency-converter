import { useState } from "react";

import { Input } from "./components/Input/Input";

export const App = () => {
    const [currencyVal, setCurrencyVal] = useState<string>("0");
	const [inputError, setInputError] = useState<string | null>(null);

    const handleCurrencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;

		// Custom validation logic
		if (typeof newValue === 'string' && !/^\d+(\.\d{2})?$/.test(newValue)) {
			setInputError('Number must be to two decimal places');
		} else {
			setInputError(null);
		}

		setCurrencyVal(newValue);
    };

    return (
        <>
            <Input
                id="currency-amount"
                label="Amount"
                type="number"
                value={currencyVal}
                onChange={handleCurrencyChange}
                placeholder="Enter amount"
				validationError={inputError}
            />
        </>
    );
};
