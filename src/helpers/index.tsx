import { IconStar, IconStarFilled, IconStarHalfFilled } from '@tabler/icons-react'

export const getRating = (rating: number) => {
    const ratingStar = []

    const fullStar = <IconStarFilled size={20} color="#ffa41c" />
    const halfStar = <IconStarHalfFilled size={20} color="#ffa41c" />
    const emptyStar = <IconStar size={20} color="#ffa41c" />

    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            ratingStar.push(fullStar)
        } else {
            ratingStar.push(emptyStar)
        }
    }

    if (rating % 1 !== 0) {
        ratingStar[Math.floor(rating)] = halfStar
    }

    return ratingStar
}
