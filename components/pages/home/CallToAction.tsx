import CallToActionButtons from '@/components/shared/CallToActionButtons'

const CallToAction = () => {
    return (
        <div className='flex gap-4 md:gap-15 justify-center items-center flex-wrap my-15 px-5 md:px-20 py-10 bg-white rounded-[30px] md:rounded-full shadow-md/30'>
            <div>
                <h2 className='text-indigo text-[28px] md:text-[36px] font-helvetica font-semibold text-center md:text-left'>Plan Your Trip With Us</h2>
                <p className='text-indigo text-[16px] md:text-[20px] text-center md:text-left'>Your journey begins with a single step—let’s plan it together.</p>
            </div>
            <CallToActionButtons />
        </div>
    )
}

export default CallToAction