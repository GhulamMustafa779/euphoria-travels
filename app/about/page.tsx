import SectionTitle from '@/components/ui/SectionTitle'
import SubTitle from '@/components/ui/SubTitle'
import Image from 'next/image'
import { BadgeCheck, Globe, Headphones, Heart, Leaf, Shield, Star, Tag, Users } from 'lucide-react'

const values = [
    {
        title: 'Integrity',
        description: 'We are honest, transparent, and put our customers first.',
        icon: Shield,
    },
    {
        title: 'Respect',
        description: 'We value people, cultures, and the places we visit.',
        icon: Users,
    },
    {
        title: 'Responsibility',
        description: 'We travel responsibly and give back to the communities.',
        icon: Leaf,
    },
]

const highlights = [
    {
        title: 'Curated Experiences',
        description: 'Handpicked destinations and experiences.',
        icon: Globe,
    },
    {
        title: '24/7 Support',
        description: "We're here for you anytime, anywhere.",
        icon: Headphones,
    },
    {
        title: 'Best Value',
        description: 'Quality services at competitive prices.',
        icon: Tag,
    },
    {
        title: 'Customer First',
        description: 'Personalized care and lasting relationships.',
        icon: Heart,
    },
]

const AboutPage = () => {
    return (
        <div className='my-[120px] md:my-[150px] flex flex-col items-center px-4'>
            <SectionTitle bgText='About' title='About Us' />
            <h3 className='text-[18px] md:text-[24px] font-helvetica font-medium text-indigo mt-[10px] text-center'>Crafting Meaningful Travel Experiences</h3>
            <SubTitle text='We create thoughtfully designed tours that bring you closer to destinations, cultures, and unforgettable moments.' />

            <div className='w-full max-w-[1180px] mt-8 md:mt-10 overflow-hidden rounded-[22px] border border-[#ece9df] bg-[#f8f7f3]'>
                <section className='flex flex-col md:flex-row items-center gap-8 px-6 py-8 md:px-10 md:py-10 bg-[#f7f5ef]'>
                    <div className='w-full md:w-1/2 max-w-[500px]'>
                        <div className='flex items-center gap-4'>
                            <span className='flex h-14 w-14 items-center justify-center rounded-full bg-blond/40 text-[#b18a2f]'>
                                <Users size={28} strokeWidth={1.8} />
                            </span>
                            <div>
                                <h2 className='text-[30px] leading-[120%] font-helvetica font-semibold text-indigo'>1. Who We Are</h2>
                                <span className='mt-2 block h-[3px] w-12 rounded bg-[#d9c185]' />
                            </div>
                        </div>
                        <p className='mt-5 text-[18px] font-helvetica text-indigo/85 leading-[175%]'>
                            We are a passionate team of travel enthusiasts dedicated to creating memorable journeys. With years of experience and a love for exploration, we help travelers discover the world with ease and confidence.
                        </p>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <Image
                            src='/images/attabad.jpeg'
                            alt='Who we are'
                            width={720}
                            height={430}
                            className='h-[250px] md:h-[320px] w-full rounded-[20px] object-cover'
                        />
                    </div>
                </section>

                <section className='px-6 py-8 md:px-10 md:py-10 bg-[#f4f2ea] border-y border-[#e8e3d7]'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
                        <div className='max-w-[560px]'>
                            <div className='flex items-center gap-4'>
                                <span className='flex h-14 w-14 items-center justify-center rounded-full bg-blond/40 text-[#b18a2f]'>
                                    <BadgeCheck size={28} strokeWidth={1.8} />
                                </span>
                                <div>
                                    <h2 className='text-[30px] leading-[120%] font-helvetica font-semibold text-indigo'>2. Our Mission & Values</h2>
                                    <span className='mt-2 block h-[3px] w-12 rounded bg-[#d9c185]' />
                                </div>
                            </div>
                            <p className='mt-5 text-[18px] font-helvetica text-indigo/85 leading-[175%]'>
                                Our mission is to make travel enriching, seamless, and accessible for everyone. We are guided by integrity, respect, and a commitment to responsible travel that supports local communities and preserves our planet.
                            </p>
                        </div>
                        <div className='grid grid-cols-1 sm:grid-cols-3 rounded-[16px] border border-[#e8e2d5] bg-[#f6f3ea]'>
                            {values.map(({ title, description, icon: Icon }, index) => (
                                <div key={title} className={`px-5 py-6 text-center ${index < values.length - 1 ? 'sm:border-r border-[#e3dbca]' : ''}`}>
                                    <Icon className='mx-auto text-indigo' size={34} strokeWidth={1.7} />
                                    <h4 className='mt-3 text-[20px] font-helvetica font-semibold text-indigo leading-tight'>{title}</h4>
                                    <p className='mt-2 text-[16px] leading-[165%] font-helvetica text-indigo/80'>{description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className='flex flex-col md:flex-row items-center gap-8 px-6 py-8 md:px-10 md:py-10 bg-[#f7f5ef]'>
                    <div className='w-full md:w-1/2 max-w-[500px]'>
                        <div className='flex items-center gap-4'>
                            <span className='flex h-14 w-14 items-center justify-center rounded-full bg-blond/40 text-[#b18a2f]'>
                                <Star size={28} strokeWidth={1.8} />
                            </span>
                            <div>
                                <h2 className='text-[30px] leading-[120%] font-helvetica font-semibold text-indigo'>3. What Makes Us Different</h2>
                                <span className='mt-2 block h-[3px] w-12 rounded bg-[#d9c185]' />
                            </div>
                        </div>
                        <p className='mt-5 text-[18px] font-helvetica text-indigo/85 leading-[175%]'>
                            We combine personalized service, expert knowledge, and attention to detail to design journeys that are unique and worry-free. Your happiness is at the heart of everything we do.
                        </p>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <Image
                            src='/images/ayyun.jpeg'
                            alt='What makes us different'
                            width={720}
                            height={430}
                            className='h-[250px] md:h-[320px] w-full rounded-[20px] object-cover'
                        />
                    </div>
                </section>

                <section className='border-t border-[#e3ddd0] bg-[#f8f7f3] px-6 py-5 md:px-10 md:py-6'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#e2dccf]'>
                        {highlights.map(({ title, description, icon: Icon }) => (
                            <div key={title} className='flex items-start gap-4 px-4 py-4'>
                                <Icon className='mt-0.5 shrink-0 text-indigo' size={30} strokeWidth={1.7} />
                                <div>
                                    <h3 className='text-[22px] leading-tight font-helvetica font-semibold text-indigo'>{title}</h3>
                                    <p className='mt-1 text-[15px] leading-[155%] font-helvetica text-indigo/80'>{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AboutPage