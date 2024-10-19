'use client'

import { motion } from 'framer-motion'
import { ReactGoogleReviews } from 'react-google-reviews'
import 'react-google-reviews/dist/index.css'

import TestimonialCarousel from './testimonials-carousel'

function Reviews() {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 30,
            }}
            whileInView={{
                opacity: 1,
                y: -10,
                transition: {
                    duration: 0.5,
                    delay: 0.3,
                },
            }}
            viewport={{ once: true }}
            className="w-full"
        >
            <ReactGoogleReviews
                layout="custom"
                featurableId={process.env.NEXT_PUBLIC_WIDGET_ID as string}
                logoVariant="full"
                accessibility
                renderer={reviews => <TestimonialCarousel testimonials={reviews} />}
            />
        </motion.div>
    )
}

export default Reviews
