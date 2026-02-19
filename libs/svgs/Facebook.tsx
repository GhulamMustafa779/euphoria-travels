import React from 'react'
import SVGType from '../types/svg.type'
import ColorEnum from '../enums/color.enum'


const FacebookIcon = ({ width = 30, height = 30, color = ColorEnum.WHITE }: SVGType) => {
    return (
        <svg width={width} height={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 20C40 8.96 31.04 0 20 0C8.96 0 0 8.96 0 20C0 29.68 6.88 37.74 16 39.6V26H12V20H16V15C16 11.14 19.14 8 23 8H28V14H24C22.9 14 22 14.9 22 16V20H28V26H22V39.9C32.1 38.9 40 30.38 40 20Z" fill={color} />
        </svg>
    )
}

export default FacebookIcon