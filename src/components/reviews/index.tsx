'use client'

import { ReactGoogleReviews } from 'react-google-reviews'
import 'react-google-reviews/dist/index.css'

import TestimonialCarousel from './testimonials-carousel'

function Reviews() {
    return (
        <ReactGoogleReviews
            layout="custom"
            featurableId={process.env.NEXT_PUBLIC_WIDGET_ID as string}
            logoVariant="full"
            accessibility
            renderer={reviews => <TestimonialCarousel testimonials={reviews} />}
        />
    )
}

export default Reviews
