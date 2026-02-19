import DestinationCard from '@/components/pages/home/DestinationCard'
import SectionTitle from '@/components/ui/SectionTitle'
import SubTitle from '@/components/ui/SubTitle'

const destinations = [
    {
        id: '1',
        location: 'Shandoor Pass',
        area: 'Chitral',
        description: 'Shandur Pass is a high mountain pass in northern Pakistan, connecting Gilgit-Baltistan and Khyber Pakhtunkhwa (Chitral)',
        imageUrl: '/images/backdrop.jpeg'
    },
    {
        id: '1',
        location: 'Shandoor Pass',
        area: 'Chitral',
        description: 'Shandur Pass is a high mountain pass in northern Pakistan, connecting Gilgit-Baltistan and Khyber Pakhtunkhwa (Chitral)',
        imageUrl: '/images/backdrop.jpeg'
    },
    {
        id: '1',
        location: 'Shandoor Pass',
        area: 'Chitral',
        description: 'Shandur Pass is a high mountain pass in northern Pakistan, connecting Gilgit-Baltistan and Khyber Pakhtunkhwa (Chitral)',
        imageUrl: '/images/backdrop.jpeg'
    },
    {
        id: '1',
        location: 'Shandoor Pass',
        area: 'Chitral',
        description: 'Shandur Pass is a high mountain pass in northern Pakistan, connecting Gilgit-Baltistan and Khyber Pakhtunkhwa (Chitral)',
        imageUrl: '/images/backdrop.jpeg'
    },
    {
        id: '1',
        location: 'Shandoor Pass',
        area: 'Chitral',
        description: 'Shandur Pass is a high mountain pass in northern Pakistan, connecting Gilgit-Baltistan and Khyber Pakhtunkhwa (Chitral)',
        imageUrl: '/images/backdrop.jpeg'
    },
    {
        id: '1',
        location: 'Shandoor Pass',
        area: 'Chitral',
        description: 'Shandur Pass is a high mountain pass in northern Pakistan, connecting Gilgit-Baltistan and Khyber Pakhtunkhwa (Chitral)',
        imageUrl: '/images/backdrop.jpeg'
    },
]

const DreamDestinations = () => {
    return (
        <div className='flex flex-col items-center w-full p-[10px] my-[75px]'>
            <SectionTitle bgText='Destination' title='Dream Destinations' />
            <SubTitle text='Explore our collection of dream destinations, carefully chosen to inspire your next journey and turn your travel dreams into reality.' />
            <div className='mt-[30px] grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]'>
                {
                    destinations.map((destination, index) => {
                        return (
                            <DestinationCard key={index} destination={destination} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DreamDestinations