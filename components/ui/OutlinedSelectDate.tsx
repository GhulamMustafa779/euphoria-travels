import React, { useRef } from 'react'
import ErrorText from './ErrorText';

interface OutlinedSelectDateProps {
    value: string;
    name: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string,
    width?: string,
}

const OutlinedSelectDate = ({ value, name, placeholder, onChange, error, width = 'full' }: OutlinedSelectDateProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const showDatePlaceholder = !value;

    const handleOverlayClick = () => {
        inputRef.current?.showPicker?.() ?? inputRef.current?.click();
    };

    return (
        <div className={`flex flex-col gap-1  ${width === 'full' ? 'w-full' : `w-[${width}]`}`}>
            <div className={`relative border ${error ? 'border-red-500' : 'border-indigo'} bg-transparent rounded-full py-[8px] px-[20px] min-w-[260px] w-full`}>
                {showDatePlaceholder && (
                    <>
                        <span
                            className="absolute left-[20px] top-1/2 -translate-y-1/2 text-[16px] text-medium-grey pointer-events-none z-[1]"
                            aria-hidden
                        >
                            {placeholder}
                        </span>
                        <div
                            className="absolute inset-0 cursor-pointer select-none z-[1] rounded-full"
                            style={{ WebkitUserSelect: 'none', userSelect: 'none' }}
                            onClick={handleOverlayClick}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); inputRef.current?.showPicker?.() ?? inputRef.current?.click(); } }}
                            role="button"
                            tabIndex={0}
                            aria-label={`Choose date, ${placeholder}`}
                        />
                    </>
                )}
                <input
                    ref={inputRef}
                    type="date"
                    value={value}
                    name={name}
                    onChange={onChange}
                    className={`w-full outline-none text-[16px] bg-transparent relative ${showDatePlaceholder ? 'text-transparent' : 'text-medium-grey'}`}
                    tabIndex={showDatePlaceholder ? -1 : 0}
                />
            </div>
            {error && <ErrorText text={error} />}
        </div>
    )
}

export default OutlinedSelectDate