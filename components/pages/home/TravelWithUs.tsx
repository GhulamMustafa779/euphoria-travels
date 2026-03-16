import SectionTitle from '@/components/ui/SectionTitle'
import SubTitle from '@/components/ui/SubTitle'
import Value from '@/components/ui/Value'
import ValueType from '@/libs/types/value.type'
import { WorldIcon, LocationCheckedIcon, HandShakeIcon, SparklesIcon } from '@/libs/svgs'
import ColorEnum from '@/enum/color.enum'

const values: ValueType[] = [
    {
        icon: <WorldIcon width={32} height={32} color={ColorEnum.ORANGE} />,
        title: "Expertly Crafted Tours",
        description: "Our travel specialists carefully design every tour to include the best destinations, comfortable accommodations, and well-planned itineraries"
    },
    {
        icon: <LocationCheckedIcon width={32} height={32} color={ColorEnum.ORANGE} />,
        title: "Local Knowledge & Guidance",
        description: "We provide valuable travel insights and local expertise to help you explore destinations more deeply and experience the culture and hidden gems"
    },
    {
        icon: <HandShakeIcon width={32} height={32} color={ColorEnum.ORANGE} />,
        title: "Reliable Travel Support",
        description: "From planning your trip to the end of your journey, our team is always ready to assist you and ensure everything runs smoothly and stress-free"
    },
    {
        icon: <SparklesIcon width={32} height={32} color={ColorEnum.ORANGE} />,
        title: "Unforgettable Experiences",
        description: "We focus on creating meaningful travel experiences that leave you with lasting memories, amazing photos, and stories worth sharing"
    },
]

const TravelWithUs = () => {
    return (
        <section className='max-w-[1220px] w-full my-[75px] flex flex-col items-center p-[10px]'>
            <SectionTitle bgText='Choose Us' title='Why Travel With Us?' />
            <SubTitle text='Choose a trusted travel company that offers carefully planned tours, excellent service, and unforgettable travel experiences' />
            <div className='flex gap-[20px] w-full justify-center mt-[30px] flex-wrap'>
                <Values values={values.slice(0, 2)} />
                <div className='hidden xl:flex max-w-[360px] w-full rounded-[30px] bg-[url("/images/ayyun.jpeg")] bg-no-repeat bg-cover bg-center'>
                </div>
                <Values values={values.slice(2)} />
            </div>
        </section>
    )
}

export default TravelWithUs

interface ValuespRrops {
    values: ValueType[];
}

const Values = ({ values }: ValuespRrops) => {
    return (
        <div className='flex flex-col gap-[20px]'>
            {
                values.map((value, index) => {
                    return <Value key={index} value={value} />
                })
            }
        </div>
    )
}