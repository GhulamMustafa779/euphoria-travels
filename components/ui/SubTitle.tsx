import ColorEnum from '@/libs/enums/color.enum';
import { findtextColor } from '@/utils/find-color';

interface SubTitleProps {
    text: string;
    textColor?: ColorEnum;
}

const SubTitle = ({ text, textColor = ColorEnum.INDIGO }: SubTitleProps) => {
    const color = findtextColor(textColor);
    return (
        <p className={`text-base ${color} leading-[140%] font-helvetica text-center my-[24px] max-w-[600px] mx-2`}>{text}</p>
    )
}

export default SubTitle