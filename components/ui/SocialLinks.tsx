import SocialLinkType from '@/libs/types/socialLink.type'
import Link from 'next/link'
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '@/libs/svgs'
import ColorEnum from '@/libs/enums/color.enum'

const socialLinks: SocialLinkType[] = [
    {
        title: 'Facebook',
        Icon: FacebookIcon,
        link: 'https://www.facebook.com/@euphoriatravelspk'
    },
    {
        title: 'Instagram',
        Icon: InstagramIcon,
        link: 'https://www.instagram.com/euphoriatravelspk',
        width: 38,
        height: 38
    },
    {
        title: 'Youtube',
        Icon: YoutubeIcon,
        link: 'https://www.youtube.com/@euphoriatravelspk'
    },
]

interface SocialLinksProps {
    color?: ColorEnum
}


const SocialLinks = ({ color }: SocialLinksProps) => {
    return (
        <div className='flex items-center gap-4'>
            {
                socialLinks.map((link, index) => (
                    <Link key={index} href={link.link} target="_blank" rel="noopener noreferrer">
                        <link.Icon color={color ? color : link.color ? link.color : ColorEnum.WHITE} width={link.width ? link.width : 30} height={link.height ? link.height : 30} />
                    </Link>
                ))
            }
        </div>
    )
}

export default SocialLinks