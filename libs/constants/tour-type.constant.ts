import OptionType from "../types/option.type";
import TourTypeEnum from "../enums/tour-type.enum";

export const tourTypes: OptionType<string>[] = Object.values(TourTypeEnum).map(
  (tourType: string) => {
    return { label: tourType, value: tourType };
  },
);
