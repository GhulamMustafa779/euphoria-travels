"use client";

import { useState } from 'react'
import tourTags from '@/libs/constants/tours-tag.constant'
import Tag from '@/components/ui/Tag'
import TourTagsEnum from '@/libs/enums/tour-tags.enum';

const TourTags = () => {
    const [selctedTag, setSelectedTag] = useState<string>(TourTagsEnum.ALL_LOCATIONS)
    const handleTagClick = (tag: string) => {
        setSelectedTag(tag)
    }
    return (
        <div className='flex gap-[10px] mt-6 flex-wrap'>
            {
                tourTags.map((tag, index) => {
                    return <Tag key={index} text={tag.label} onClick={handleTagClick} active={selctedTag === tag.label} />
                })}
        </div>

    )
}

export default TourTags