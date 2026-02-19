import React from 'react'

interface OutlinedTextAreaProps {
    value: string;
    name: string;
    placeholder: string;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
    rows?: number;
    error?: string;
}

const OutlinedTextArea = ({ rows = 3, value, name, placeholder, onChange }: OutlinedTextAreaProps) => {
    return (
        <textarea value={value} placeholder={placeholder} name={name} onChange={onChange} rows={rows} className='border border-indigo bg-transparent text-medium-grey text-[16px] rounded-[20px] px-[24px] py-[8px] min-w-[270px] w-full' />
    )
}

export default OutlinedTextArea