import OptionType from "../types/option.type";
import CountryEnum from "../enums/country.enum";

export const countries: OptionType<string>[] = Object.values(CountryEnum).map(
  (country: string) => {
    return { label: country, value: country };
  },
);
