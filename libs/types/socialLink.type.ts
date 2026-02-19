import ColorEnum from '../enums/color.enum';
import type SVGType from './svg.type'

type SocialLinkType = {
    title: string;
    Icon: React.ComponentType<SVGType>;
    link: string;
    width?: number;
    height?: number;
    color?: ColorEnum;
}

export default SocialLinkType