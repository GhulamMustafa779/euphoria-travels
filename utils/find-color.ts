import ColorEnum from "@/libs/enums/color.enum";

export const findtextColor = (color: ColorEnum) => {
    return color == ColorEnum.ORANGE ? 'text-orange'
        : color == ColorEnum.INDIGO ? 'text-indigo'
            : color == ColorEnum.BLOND ? 'text-blond'
                : color == ColorEnum.PINE ? 'text-pine'
                    : color == ColorEnum.LIGHT_GREY ? 'text-light-grey'
                        : color == ColorEnum.WHITE ? 'text-white'
                            : 'text-orange';
}
