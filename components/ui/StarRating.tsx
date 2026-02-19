import { Star } from 'lucide-react'

interface StarRatingProps {
    rating: number
    maxStars?: number
    size?: number
    filledColor?: string
    emptyColor?: string
}

const StarRating = ({
    rating,
    maxStars = 5,
    size = 18,
    filledColor = 'text-orange',
    emptyColor = 'text-light-grey',
}: StarRatingProps) => {
    const clampedRating = Math.min(Math.max(rating, 0), maxStars)

    return (
        <div className='flex items-center gap-0.5'>
            {Array.from({ length: maxStars }, (_, i) => {
                const starValue = i + 1
                const fillAmount =
                    clampedRating >= starValue
                        ? 1
                        : clampedRating >= starValue - 0.5
                            ? clampedRating - (starValue - 1)
                            : 0

                return (
                    <div
                        key={i}
                        className='relative inline-flex'
                        style={{ width: size, height: size }}
                    >
                        {/* Empty star background (outline) */}
                        <Star
                            size={size}
                            className={`absolute inset-0 ${emptyColor}`}
                            strokeWidth={1.5}
                            fill='none'
                        />
                        {/* Filled star (full or partial) */}
                        <div
                            className={`absolute inset-0 overflow-hidden ${filledColor}`}
                            style={{ width: `${fillAmount * 100}%` }}
                        >
                            <Star
                                size={size}
                                className='absolute left-0 top-0'
                                strokeWidth={1.5}
                                fill='currentColor'
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default StarRating
