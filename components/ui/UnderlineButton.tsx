import ColorEnum from '@/libs/enums/color.enum';
import { findtextColor } from '@/utils/find-color';
import Link from 'next/link'

interface UnderlineButtonProps {
    href: string;
    text: string;
    textColor?: ColorEnum;
}

const UnderlineButton = ({ href, text, textColor = ColorEnum.INDIGO }: UnderlineButtonProps) => {
    const color = findtextColor(textColor)
    return (
        <Link href={href} className={`float-right ${color} text-[14px] underline font-bold`}>{text}</Link>
    )
}

export default UnderlineButton