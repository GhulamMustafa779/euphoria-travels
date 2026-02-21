import OptionType from "../types/option.type";
import TourServicesEnum from "../enums/tour-services.enum";

export const tourServices: OptionType<string>[] = Object.values(
  TourServicesEnum,
).map((service: string) => {
  return { label: service, value: service };
});
