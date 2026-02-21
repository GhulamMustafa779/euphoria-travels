import React from 'react'
import ErrorText from '../ui/ErrorText';

interface OutlinedTextAreaProps {
    value: string;
    name: string;
    placeholder: string;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
    rows?: number;
    error?: string;
}

const OutlinedTextArea = ({ rows = 3, value, name, placeholder, error, onChange }: OutlinedTextAreaProps) => {
    return (
        <div className='flex flex-col gap-1  min-w-[270px] w-full'>
            <textarea value={value} placeholder={placeholder} name={name} onChange={onChange} rows={rows} className={`border ${error ? 'border-red-500' : 'border-indigo'} bg-transparent text-medium-grey text-[16px] rounded-[20px] px-[24px] py-[8px] w-full`} />
            {error && <ErrorText text={error} />}
        </div>
    )
}

export default OutlinedTextArea