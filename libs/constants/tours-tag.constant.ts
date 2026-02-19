import TourTagsEnum from "../enums/tour-tags.enum"
import OptionType from "../types/option.type"

const tourTags: OptionType<string>[] = Object.values(TourTagsEnum).map((tag)=>({label: tag, value: tag}));

export default tourTags