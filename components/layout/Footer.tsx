import Logo from '../shared/Logo'
import SocialLinks from '../ui/SocialLinks'
import Link from "next/link"
import FooterLinksType, { FooterLinkType } from "@/libs/types/footer-links.type";

const footerLinks: FooterLinksType[] = [
    {
        header: "Booking",
        links: [
            {
                title: "Explore Tours",
                href: "/tours",
            },
            {
                title: "Customizr Tour",
                href: "/customizetour",
            },
        ]
    },
    {
        header: "Company",
        links: [
            {
                title: "About",
                href: "/about",
            },
            {
                title: "Contact Us",
                href: "/contact",
            },
        ]
    },
]

interface LinkItemProps {
    link: FooterLinkType;
}

const LinkItem = ({ link }: LinkItemProps) => {
    return (
        <Link href={link.href} className='text-white text-[14px]'>{link.title}</Link>
    )
}

const FooterLinks = () => {
    return (
        <div className="flex gap-10 flex-wrap justify-flex-start">
            {
                footerLinks.map((column, index) => {
                    return (
                        <div key={index} className="flex flex-col">
                            <h2 className='text-[16px] text-white font-bold uppercase'>
                                {column.header}
                            </h2>
                            <nav className="flex flex-col gap-1 mt-2">
                                {
                                    column.links?.map((link, index) => {
                                        return (
                                            <LinkItem key={index} link={link} />
                                        )
                                    })
                                }
                            </nav>
                        </div>
                    )
                })
            }
        </div>
    )
}

const Footer = () => {
    return (
        <div className='relative bg-pine rounded-tl-[40px] w-full flex justify-center py-[75px]'>
            <div className='max-w-[1120] w-full p-10'>
                <div className='flex flex-col sm:flex-row justify-around items-flex-start gap-7 w-full'>
                    <div className='flex flex-col md:flex-row  md:items-center gap-5'>
                        <div>
                            <Logo width={110} height={110} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <span className='font-helvetica font-bold text-[24px] text-white'>EUPHORIA TRAVELS</span>
                            <span className='font-helvetica text-[20px] text-white/90'>Let&apos;s Travel Together</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div>
                            <FooterLinks />
                        </div>
                        <div>
                            <SocialLinks />
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-6 h-[40px] bg-white w-full flex justify-center items-center'>
                <p className='text-orange text-[14px]'>©2026 Euphoria Travels. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer