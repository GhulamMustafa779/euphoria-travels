import SocialLinks from '@/components/ui/SocialLinks'
import ColorEnum from '@/libs/enums/color.enum'
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react'

const Location = () => {
    return (
        <div className='w-full bg-blond flex flex-col items-center gap-3 py-10'>
            <h1 className='text-orange text-[32px] font-bold uppercase'>
                EUPHORIA TRAVELS
            </h1>
            <div className='w-[300px] flex flex-col gap-3 items-center '>
                <div className='flex gap-2'>
                    <MapPin className='text-orange' />
                    <span className='text-[16px] text-indigo'>Rawalpindi/Islamabad, Pakistan</span>
                </div>
                <div className='flex gap-2'>
                    <Phone className='text-orange' />
                    <span className='text-[16px] text-indigo'>+92-318-4311549</span>
                </div>
                <div className='flex gap-2'>
                    <MessageCircle className='text-orange' />
                    <span className='text-[16px] text-indigo'>+92-318-4311549</span>
                </div>
                <div className='flex gap-2'>
                    <Mail className='text-orange' />
                    <span className='text-[16px] text-indigo'>info@euphoriatravels.co</span>
                </div>
            </div>
            <SocialLinks color={ColorEnum.ORANGE} />
        </div>
    )
}

export default Location