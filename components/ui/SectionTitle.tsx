import ColorEnum from "@/libs/enums/color.enum";
import { findtextColor } from "@/utils/find-color";

interface TitleProps {
    bgText: string;
    title: string;
    bgColor?: ColorEnum;
    titleColor?: ColorEnum;
}

const SectionTitle = ({ bgText, title, bgColor = ColorEnum.ORANGE, titleColor = ColorEnum.INDIGO }: TitleProps) => {
    const backgroundColor = findtextColor(bgColor);
    const titleCo = findtextColor(titleColor);

    return (
        <div className='w-full'>
            <div className="relative flex items-center justify-center h-[100px]">
                <span className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-0 text-6xl md:text-7xl lg:text-9xl font-black ${backgroundColor} tracking-tight opacity-5 font-stretch-condensed uppercase`}>{bgText}</span>
                <h1 className={`${titleCo} text-[24px] md:text-[28px] lg:text-[32px] font-semibold`}>{title}</h1>
            </div>
        </div>
    )
}

export default SectionTitle