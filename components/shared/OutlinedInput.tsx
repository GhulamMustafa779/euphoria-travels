import React from 'react'

interface OutlinedInputProps {
    type: string;
    value: string;
    name: string;
    placeholder: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    error?: string;
}

const OutlinedInput = ({ type, value, name, placeholder, onChange }: OutlinedInputProps) => {
    return (
        <input
            className='border border-indigo bg-transparent text-medium-grey text-[16px] rounded-full px-[24px] py-[8px] min-w-[260px] w-full'
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}

export default OutlinedInput