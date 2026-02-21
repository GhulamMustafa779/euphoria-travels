import React from 'react'
import ErrorText from '../ui/ErrorText';

interface OutlinedInputProps {
    type: string;
    value: string;
    name: string;
    placeholder: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    error?: string;
    width?: string;
}

const OutlinedInput = ({ type, value, name, placeholder, onChange, error, width = 'full' }: OutlinedInputProps) => {
    return (
        <div className={`flex flex-col gap-1 ${width === 'full' ? 'w-full' : `md:w-[${width}] w-full`}`}>
            <div className={`border ${error ? 'border-red-500' : 'border-indigo'} bg-transparent rounded-full min-w-[260px] w-full overflow-hidden`}>
                <input
                    className={`w-full outline-none text-medium-grey text-[16px] px-[24px] py-[8px] text-medium-grey focus:outline-none focus:ring-0`}
                    name={name}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                />
            </div>
            {error && <ErrorText text={error} />}
        </div>
    )
}

export default OutlinedInput