import SectionTitle from '@/components/ui/SectionTitle'
import StarRating from '@/components/ui/StarRating'
import SubTitle from '@/components/ui/SubTitle'
import UnderlineButton from '@/components/ui/UnderlineButton'
import ColorEnum from '@/enum/color.enum'
import TestimonialType from '@/libs/types/testimonial.type'

const testimonials: TestimonialType[] = [
    {
        name: 'Name of Person',
        personTag: 'Tag of the person',
        location: 'location',
        ratings: 4.5,
        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat pellentesque ipsum, vitae bibendum massa feugiat sit amet. ',
    },
    {
        name: 'Name of Person',
        personTag: 'Tag of the person',
        location: 'location',
        ratings: 1,
        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat pellentesque ipsum, vitae bibendum massa feugiat sit amet. ',
    },
    {
        name: 'Name of Person',
        personTag: 'Tag of the person',
        location: 'location',
        ratings: 1,
        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat pellentesque ipsum, vitae bibendum massa feugiat sit amet. ',
    },
    {
        name: 'Name of Person',
        personTag: 'Tag of the person',
        location: 'location',
        ratings: 1,
        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat pellentesque ipsum, vitae bibendum massa feugiat sit amet. ',
    }
]

const Testimonials = () => {
    return (
        <section className='flex flex-col items-center bg-indigo py-[75px] w-full p-[10px]'>
            <SectionTitle bgText='Testimonials' title='Words From Our Clients' bgColor={ColorEnum.BLOND} titleColor={ColorEnum.WHITE} />
            <SubTitle text='Discover what our travelers say about their journeys with us. Honest feedback that shows our commitment to great travel experiences.' textColor={ColorEnum.WHITE} />
            <div className='flex justify-center max-w-[1120px] flex-wrap gap-5 mt-5'>
                {
                    testimonials.map((testimonial, index) => {
                        return (
                            <Testimonial key={index} testimonial={testimonial} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Testimonials

interface TestimonialProps {
    testimonial: TestimonialType
}

const Testimonial = ({ testimonial }: TestimonialProps) => {
    return (
        <div className='max-w-[360px] w-100 bg-white/20 rounded-[30px] shadow-lg p-[25px] flex flex-col gap-3'>
            <div className='flex flex-col gap-[0px] '>
                <h3 className='text-white text-[16px] font-bold'>{testimonial.name}</h3>
                <p className='text-white/70 text-[16px] font-helvetica'>{testimonial.personTag},{testimonial.location}</p>
            </div>
            <StarRating rating={testimonial.ratings} size={24} />
            <p className='text-[16px] text-white/70'>
                {testimonial.testimonial}
            </p>
        </div>
    )
}
