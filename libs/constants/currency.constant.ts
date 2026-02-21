import OptionType from "../types/option.type";
import CurrencyEnum from "../enums/currency.enum";

export const currencies: OptionType<string>[] = Object.values(CurrencyEnum).map(
  (currency: string) => {
    return { label: currency, value: currency };
  },
);
