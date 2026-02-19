import DestinationType from '@/libs/types/destination.type'
import Image from 'next/image'

interface DestinationProps {
    destination: DestinationType;
}

const DestinationCard = ({ destination }: DestinationProps) => {
    if (!destination) return null;
    const { location, area, description, imageUrl } = destination;
    return (
        <div className={`relative max-w-[330px] w-100 h-[330px] overflow-hidden rounded-[24px]`}>
            <Image src={imageUrl} alt={location} width={330} height={330} className='absolute top-0 left-0 h-[100%] object-cover' />
            <div className='absolute bottom-0 left-0 font-helvetica text-white p-[16px]'>
                <h2 className='text-[20px] font-bold flex gap-2'>{location}, {area} <Image src='/images/arrow-transparent.svg' alt='->' width={24} height={24} /></h2>
                <p className='text-[12px]'>{description}</p>
            </div>
        </div>
    )
}

export default DestinationCard