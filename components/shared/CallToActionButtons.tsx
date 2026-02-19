import Link from 'next/link'
import Image from 'next/image'

const CallToActionButtons = () => {
    return (
        <div className="flex items-center gap-[12px] p-[6px] border border-white rounded-full inset-shadow-sm/30">
            <Link href='/custom-tour' className='h-[37px] cursor-pointer px-[14] md:px-[24px] py-[8px] text-white text-[12px] md:text-[14px] font-bold bg-orange rounded-full shadow-md'>Customize a Tour</Link>
            <Link href='/tours' className='flex items-center gap-[6px] h-[37px] cursor-pointer ps-[14px] md:ps-[24px] pe-[10px] py-[8px] text-indigo text-[12px] md:text-[14px] font-bold bg-white rounded-full shadow-md'>
                Explore Tours
                <Image src='/images/arrow-dark.svg' alt='->' width={28} height={28} />
            </Link>
        </div>
    )
}

export default CallToActionButtons