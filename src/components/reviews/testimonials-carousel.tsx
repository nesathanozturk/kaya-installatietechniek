'use client'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Image from 'next/image'
import { Fragment } from 'react'

import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

import { TestimonialModal } from './testimonial-modal'
import googleLogo from '@/assets/images/google.webp'
import { getRating } from '@/helpers'
import { GoogleReview } from '@/types'

dayjs.extend(relativeTime)

type TestimonialCarouselProps = {
    testimonials: GoogleReview[]
}

function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
    const filteredTestimonialsByCommentLength = testimonials.filter(testimonial => testimonial.comment.length > 0)

    return (
        <Carousel className="max-w-sm md:max-w-3xl lg:max-w-6xl mx-auto">
            <CarouselContent>
                {filteredTestimonialsByCommentLength.map(testimonial => (
                    <CarouselItem
                        key={`${testimonial.reviewId}-${testimonial.comment}-${testimonial.reviewer.profilePhotoUrl}-review`}
                        className="md:basis-1/2 lg:basis-1/3"
                    >
                        <Card className="shadow-sm dark:bg-gradient-to-r dark:from-slate-800/40 dark:to-zinc-900">
                            <CardContent className="flex flex-col aspect-square items-center justify-center">
                                <div className="flex flex-col py-5">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-1">
                                            {getRating(testimonial.starRating).map((star, index) => (
                                                <Fragment key={index}>{star}</Fragment>
                                            ))}
                                        </div>
                                        <Image src={googleLogo} alt="Google Logo" className="h-7 w-20" />
                                    </div>
                                    {testimonial.comment.length > 0 && (
                                        <div className="flex-1 text-gray-600 dark:text-gray-300 my-8">
                                            {`"${testimonial.comment.slice(0, 200)}${testimonial.comment.length > 200 ? '...' : ''}"`}
                                            {testimonial.comment.length > 200 && (
                                                <TestimonialModal testimonial={testimonial} />
                                            )}
                                        </div>
                                    )}
                                    <div className="flex gap-3">
                                        <Image
                                            className="rounded-full"
                                            height={40}
                                            width={40}
                                            alt={testimonial.reviewer.displayName}
                                            src={testimonial.reviewer.profilePhotoUrl}
                                            loading="lazy"
                                        />
                                        <div>
                                            <p className="text-sm font-semibold text-gray-900 dark:text-white">
                                                {testimonial.reviewer.displayName}
                                            </p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                {dayjs(testimonial.createTime).fromNow()}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default TestimonialCarousel
