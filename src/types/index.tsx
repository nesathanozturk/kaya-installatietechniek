export type GoogleReview = {
    reviewId: string | null
    reviewer: {
        profilePhotoUrl: string
        displayName: string
        isAnonymous: boolean
    }
    starRating: number
    comment: string
    createTime: string | null
    updateTime: string | null
    reviewReply?: {
        comment: string
        updateTime: string
    } | null
}
