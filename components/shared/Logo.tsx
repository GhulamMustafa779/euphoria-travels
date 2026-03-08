import Link from "next/link"
import Image from "next/image"

interface LogoProps {
    width?: number;
    height?: number;
}

const Logo = ({ width = 70, height = 70 }: LogoProps) => {
    return (
        <Link href={'/'} className="cursor-pointer hover:scale-[105%]">
            <Image src='/images/Logo.png' alt='Euphoria Travels' width={width} height={height} loading="eager" />
        </Link>
    )
}

export default Logo