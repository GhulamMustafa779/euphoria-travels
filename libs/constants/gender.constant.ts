import OptionType from "../types/option.type";
import GenderEnum from "../enums/gender.enum";

export const genders: OptionType<string>[] = Object.values(GenderEnum).map(
  (gender: string) => {
    return { label: gender, value: gender };
  },
);
