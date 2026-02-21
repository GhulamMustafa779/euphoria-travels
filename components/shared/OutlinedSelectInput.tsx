import OptionType from '@/libs/types/option.type'
import ErrorText from '../ui/ErrorText';

interface OutlinedSelectInputProps {
    options: OptionType<string>[];
    name: string;
    value: string;
    placeholder: string;
    onChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
    error?: string;
    width?: string;
}

const OutlinedSelectInput = ({ options, name, value, placeholder, onChange, error, width = 'full' }: OutlinedSelectInputProps) => {
    return (
        <div className={`flex flex-col gap-1 ${width === 'full' ? 'w-full' : `md:w-[${width}] w-full`}`}>
            <div className={`border ${error ? 'border-red-500' : 'border-indigo'} bg-transparent rounded-full py-[8px] px-[20px] min-w-[260px] w-full`}>
                <select name={name} value={value} onChange={onChange} className='w-full outline-none text-medium-grey text-[16px] text-medium-grey'>
                    <option value=''>{placeholder}</option>
                    {
                        options.map((option, index) => {
                            return (
                                <option key={index} value={option.value} className='text-grey'>{option.label}</option>
                            )
                        })
                    }
                </select>
            </div>
            {error && <ErrorText text={error} />}
        </div>

    )
}

export default OutlinedSelectInput