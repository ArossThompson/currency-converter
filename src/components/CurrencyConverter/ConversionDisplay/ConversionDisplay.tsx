import { useState, useEffect } from "react";
import './converisonDisplay.scss';

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
    const [conversionExpiryCount, setConversionExpiryCount] =
        useState<number>(initialCount);

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
            className="conversion-display"
            aria-live="assertive"
            aria-labelledby="conversion-label"
        >
            <p id="conversion-display__content">
                <strong>{inputAmount} {baseRate}</strong> is equivelant to <strong>{targetAmount} {targetRate}</strong>
                
            </p>

            <div className="conversion-display__notification">
                <p>This will expire in {conversionExpiryCount} seconds</p>
            </div>
        </div>
    );
};
