import OptionType from '@/libs/types/option.type'

interface OutlinedSelectInputProps {
    options: OptionType<string>[];
    name: string;
    value: string;
    placeholder: string;
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
    error?: string;
}

const OutlinedSelectInput = ({ options, name, value, placeholder, onChange }: OutlinedSelectInputProps) => {
    return (
        <div className='border border-indigo bg-transparent text-medium-grey rounded-full py-[8px] px-[24px] text-[16px] min-w-[260px] w-full'>
            <select name={name} value={value} onChange={onChange} className='w-full'>
                <option disabled>{placeholder}</option>
                {
                    options.map((option, index) => {
                        return (
                            <option key={index} value={option.value} className='text-grey'>{option.label}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default OutlinedSelectInput