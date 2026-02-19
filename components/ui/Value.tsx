import Image from 'next/image'
import ValueType from '@/libs/types/value.type'

interface ValueProps {
    value: ValueType
}

const Value = ({ value }: ValueProps) => {
    return (
        <div className='max-w-[360px] w-full rounded-[30px] p-[25px] bg-orange/10 flex flex-col gap-[20px]'>
            <Image src={value.iconUrl} alt={'=>'} width={60} height={60} />
            <h3 className='text-[16px] text-indigo font-semibold uppercase'>{value.title}</h3>
            <p className='text-[16px] leading-[140%] text-indigo'>
                {value.description}
            </p>
        </div>
    )
}

export default Value