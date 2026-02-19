import CallToActionButtons from "@/components/shared/CallToActionButtons"

const Hero = () => {
    return (
        <section className='relative bg-pine w-full h-[calc(100vh-85px)] flex justify-center items-center p-[10px] overflow-hidden'>
            <div className='absolute bg-[url("/images/backdrop.jpeg")] bg-no-repeat bg-cover h-full w-full opacity-10'></div>
            <div className='relative w-[700px] h-[300px]'>
                <div className='absolute z-10 text-center text-white flex flex-col items-center'>
                    <p className='text-[12px] md:text-[18px] tracking-[3] font-medium text-white'>MAKE YOUR JOURNEY MEMORABLE WITH</p>
                    <h1 className='text-[60px] sm:text-[70px] md:text-[100px] lg:text-[130px] font-bold w-[100%] max-w-[700px] leading-[92%] text-shadow-lg mt-[15px]'>EUPHORIA TRAVELS</h1>
                    <p className='text-[12px] font-medium mt-[15px] max-w-[450px]'>Explore beautiful destinations, create unforgettable memories, and experience the joy of travel with Euphoria Travels.</p>
                    <div className="mt-10">
                        <CallToActionButtons />
                    </div>
                </div>
                <div className='absolute left-[-20%] bottom-[-30%] bg-[url("/images/sorlaspur.jpeg")] bg-cover bg-center h-[100px] md:h-[200px] lg:h-[300px] w-[100px] md:w-[200px] lg:w-[300px] object-cover rounded-[30px] shadow-xl' />
                <div className='absolute right-[-20%] top-[-30%] bg-[url("/images/attabad.jpeg")] bg-cover bg-center h-[100px] md:h-[200px] lg:h-[300px] w-[100px] md:w-[200px] lg:w-[300px] object-cover rounded-[30px] shadow-xl' />

            </div>
        </section>
    )
}

export default Hero