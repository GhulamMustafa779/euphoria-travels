import SectionTitle from '@/components/ui/SectionTitle'
import SubTitle from '@/components/ui/SubTitle'
import Value from '@/components/ui/Value'
import ValueType from '@/libs/types/value.type'

const values: ValueType[] = [
    {
        iconUrl: '/images/arrow-dark.png',
        title: "Lorem Ipsum Dolor 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat pellentesque ipsum, vitae bibendum massa feugiat sit amet."
    },
    {
        iconUrl: '/images/arrow-dark.png',
        title: "Lorem Ipsum Dolor 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat pellentesque ipsum, vitae bibendum massa feugiat sit amet."
    },
    {
        iconUrl: '/images/arrow-dark.png',
        title: "Lorem Ipsum Dolor 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat pellentesque ipsum, vitae bibendum massa feugiat sit amet."
    },
    {
        iconUrl: '/images/arrow-dark.png',
        title: "Lorem Ipsum Dolor 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat pellentesque ipsum, vitae bibendum massa feugiat sit amet."
    },
]

const TravelWithUs = () => {
    return (
        <section className='max-w-[1220px] w-full my-[75px] flex flex-col items-center p-[10px]'>
            <SectionTitle bgText='Choose Us' title='Why Travel With Us?' />
            <SubTitle text='Explore our collection of dream destinations, carefully chosen to inspire your next journey and turn your travel dreams into reality.' />
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