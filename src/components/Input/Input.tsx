import './input.scss';

interface InputProps {
    type: string;
    id: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    validationError?: string | null;
}

export const Input: React.FC<InputProps> = ({
    type,
    id,
    label,
    value,
    onChange,
    placeholder,
    validationError,
}) => {
    return (
        <div className="input-container" data-testid={id}>
            <label className="input-container__label" htmlFor={id}>
                {label}
            </label>

            <input
                data-testid="input"
                className={validationError ? "input-container__input input-container__input--error" : "input-container__input"}
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />

            {validationError && (
                <div className="input-container__error-message" data-testid="validation-error">{validationError}</div>
            )}
        </div>
    );
};
