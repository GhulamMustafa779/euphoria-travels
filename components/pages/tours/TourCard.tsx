"use client";
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const TourCard = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/tours/1`);
    }

    return (
        <div className='flex flex-col gap-[12px] max-w-[276px] border border-indigo backdrop-blur-md rounded-[30px] overflow-hidden p-[6px] cursor-pointer' onClick={handleClick}>
            <div className='w-[260px] h-[250px] rounded-[24px] overflow-hidden'>
                <Image src={'/images/sorlaspur.jpeg'} alt='' width={260} height={250} className='h-full object-cover' />
            </div>
            <div className='flex flex-col gap-[6px] px-[5px] mb-3'>
                <h2 className='text-indigo text-[16px] font-bold font-helvetica'>
                    shandoor
                </h2>
                <p className='text-light-grey text-[12px] line-clamp-3'>
                    Shandur Pass is a high mountain pass in northern Pakistan, connecting Gilgit-Baltistan and Khyber Pakhtunkhwa (Chitral).
                </p>
                <div className='flex gap-2'>
                    <h3 className='text-indigo text-[12px] font-semibold'>May 11 - May 25, 2026</h3>
                    <p className='text-light-grey text-[12px]'>(15 days)</p>
                </div>
                <div className='flex items-center w-full my-1'>
                    <h3 className='font-bold text-[16px] text-orange leading-3'>$ 2345</h3>
                    <p className='text-[8px] text-indigo ml-2'>Per Person</p>
                </div>
            </div>
        </div>
    )
}

export default TourCard