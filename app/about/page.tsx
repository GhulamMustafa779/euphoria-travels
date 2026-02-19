import SectionTitle from '@/components/ui/SectionTitle'
import SubTitle from '@/components/ui/SubTitle'
import Image from 'next/image'

const AboutPage = () => {
    return (
        <div className='my-[150px] flex flex-col items-center'>
            <SectionTitle bgText='About' title='About Us' />
            <h3 className='text-[18px] md:text-[24px] font-helvetica font-medium text-indigo mt-[10px] text-center'>Crafting Meaningful Travel Experiences</h3>
            <SubTitle text='We create thoughtfully designed tours that bring you closer to destinations, cultures, and unforgettable moments.' />
            <div className='flex flex-col items-center gap-4 w-full mt-5'>
                <div className='flex flex-col justify-center items-center md:flex-row gap-5 max-w-[1000px] w-full p-5 md:p-10'>
                    <div className='w-full md:w-1/2 text-justify max-w-[480px]'>
                        <h1 className='text-[24px] font-helvetica font-medium text-orange'>Who We Are</h1>
                        <p className='text-[16px] font-helvetica text-indigo leading-[150%] mt-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel vehicula arcu, vitae feugiat ligula. Duis tincidunt aliquam dapibus. Nullam nulla leo, tincidunt sed auctor ut, sagittis eu lorem. Vivamus dignissim auctor iaculis. Vivamus auctor pharetra urna, sed pulvinar ante placerat sit amet. Sed at tortor ligula. Fusce suscipit quam eu consectetur convallis.</p>
                    </div>
                    <div className='w-full md:w-1/2 max-w-[480px]'>
                        <Image src='/images/attabad.jpeg' alt='About' width={480} height={280} className='rounded-[30px]' />
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center md:flex-row-reverse gap-5 max-w-[1000px] w-full p-5 md:p-10'>
                    <div className='w-full md:w-1/2 text-justify max-w-[480px]'>
                        <h1 className='text-[24px] font-helvetica font-medium text-orange'>Our Mission & Values</h1>
                        <p className='text-[16px] font-helvetica text-indigo leading-[150%] mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel vehicula arcu, vitae feugiat ligula. Duis tincidunt aliquam dapibus. Nullam nulla leo, tincidunt sed auctor ut, sagittis eu lorem.</p>
                        <ul className='list-disc list-inside text-[16px] font-helvetica text-indigo leading-[150%] mt-2 text-left'>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Vivamus vel vehicula arcu, vitae feugiat ligula.</li>
                            <li>Duis tincidunt aliquam dapibus.</li>
                            <li>Nullam nulla leo, tincidunt sed auctor ut, sagittis eu lorem.</li>
                            <li>Vivamus dignissim auctor iaculis.</li>
                        </ul>
                    </div>
                    <div className='w-full md:w-1/2 max-w-[480px]'>
                        <Image src='/images/sorlaspur.jpeg' alt='About' width={480} height={280} className='rounded-[30px]' />
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center md:flex-row gap-5 max-w-[1000px] w-full p-5 md:p-10'>
                    <div className='w-full md:w-1/2 text-justify max-w-[480px]'>
                        <h1 className='text-[24px] font-helvetica font-medium text-orange'>What Makes Us Different</h1>
                        <p className='text-[16px] font-helvetica text-indigo leading-[150%] mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel vehicula arcu, vitae feugiat ligula. Duis tincidunt aliquam dapibus. Nullam nulla leo, tincidunt sed auctor ut, sagittis eu lorem.</p>
                        <ul className='list-disc list-inside text-[16px] font-helvetica text-indigo leading-[150%] mt-2'>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Vivamus vel vehicula arcu, vitae feugiat ligula.</li>
                            <li>Duis tincidunt aliquam dapibus.</li>
                            <li>Nullam nulla leo, tincidunt sed auctor ut, sagittis eu lorem.</li>
                            <li>Vivamus dignissim auctor iaculis.</li>
                        </ul>
                    </div>
                    <div className='w-full md:w-1/2 max-w-[480px]'>
                        <Image src='/images/ayyun.jpeg' alt='About' width={480} height={280} className='rounded-[30px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage