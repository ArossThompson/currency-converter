import { useState, useEffect } from "react";
interface CurrencyDisplayProps {
    inputAmount: string;
    baseRate: string;
    targetAmount: string;
    targetRate: string;
    initialCount: number;
}

export const ConversionDisplay: React.FC<CurrencyDisplayProps> = ({
    inputAmount,
    baseRate,
    targetAmount,
    targetRate,
    initialCount,
}) => {
    const [conversionExpiryCount, setConversionExpiryCount] = useState<number>(initialCount);

    useEffect(() => {
        // handle conversion display timer
        const conversionExpiryTimer = setInterval(() => {
            if (conversionExpiryCount > 0) {
                setConversionExpiryCount(conversionExpiryCount - 1);
            }
        }, 1000);

        // clean up
        return () => clearInterval(conversionExpiryTimer);
    }, [conversionExpiryCount]);

    return (
        <div
            data-testid="conversion-display"
            className="currency-display"
            aria-live="assertive"
            aria-labelledby="conversion-label"
        >
            <h1 id="conversion-label">
                {inputAmount} {baseRate} is equivelant to {targetAmount}{" "}
                {targetRate}
            </h1>
            <p>This will expire in {conversionExpiryCount} seconds</p>
        </div>
    );
};
