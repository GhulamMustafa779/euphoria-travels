import SVGType from '../types/svg.type'
import ColorEnum from '../enums/color.enum'

const LocationCheckedIcon = ({ width = 24, height = 24, color = ColorEnum.INDIGO }: SVGType) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin-check-inside-icon lucide-map-pin-check-inside">
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
            <path d="m9 10 2 2 4-4" />
        </svg>
    )
}

export default LocationCheckedIcon