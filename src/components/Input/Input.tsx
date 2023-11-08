interface InputProps {
    type: string;
    id: string;
    label: string;
    value: number | string;
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
        <div className="input-container">
            <label className="input-container__label" htmlFor={id}>
                {label}
            </label>

            <input
                data-testid="input"
                className="input-container__input"
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />

            {validationError && (
                <div className="error-message">{validationError}</div>
            )}
        </div>
    );
};