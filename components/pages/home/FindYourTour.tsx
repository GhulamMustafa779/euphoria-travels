import SectionTitle from '@/components/ui/SectionTitle'
import SubTitle from '@/components/ui/SubTitle'
import ColorEnum from '@/libs/enums/color.enum'
import TourTags from './TourTags'
import TourCard from '../tours/TourCard'
import UnderlineButton from '@/components/ui/UnderlineButton'

const FindYourTour = () => {
    return (
        <section className='flex flex-col items-center bg-blond py-[75px] w-full p-[10px]'>
            <SectionTitle bgText='Packages' title='Find Your Tour' bgColor={ColorEnum.INDIGO} />
            <SubTitle text='Discover amazing destinations around the world with our expertly planned tours designed for comfort, adventure, and unforgettable memories' />
            <TourTags />
            <div className='max-w-[1100px] w-full mt-5'>
                <UnderlineButton href='/tours' text="See All" />
            </div>
            <div className='flex gap-[10px] mt-5 flex-wrap justify-center'>
                {
                    [1, 2, 3, 4].map((_, index) => {
                        return <TourCard key={index} />
                    })
                }
            </div>
        </section>
    )
}

export default FindYourTour