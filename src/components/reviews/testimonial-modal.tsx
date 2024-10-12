import dayjs from 'dayjs'
import Image from 'next/image'

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

import googleLogo from '@/assets/images/google.webp'
import { getRating } from '@/helpers'
import { GoogleReview } from '@/types'

type TestimonialModalProps = {
    testimonial: GoogleReview
}

export function TestimonialModal({ testimonial }: TestimonialModalProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <span className="text-blue-500 ml-2 text-base hover:underline cursor-pointer">Read more</span>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="-mb-2">{testimonial.reviewer.displayName}'s Review</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col py-5">
                    {testimonial.comment.length > 0 && (
                        <q className="flex-1 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                            {testimonial.comment}
                        </q>
                    )}
                    <div className="mt-6 flex gap-3">
                        <span className="inline-flex rounded-full">
                            <Image
                                className="h-10 w-10 rounded-full"
                                height={40}
                                width={40}
                                alt={testimonial.reviewer.displayName}
                                src={testimonial.reviewer.profilePhotoUrl}
                                loading="lazy"
                            />
                        </span>
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
                <div className="w-full flex justify-between items-center">
                    <div className="flex gap-1">
                        {getRating(testimonial.starRating).map((star, index) => (
                            <span key={index} className="text-yellow-400">
                                {star}
                            </span>
                        ))}
                    </div>
                    <Image src={googleLogo} alt="Google Logo" width={80} height={80} />
                </div>
            </DialogContent>
        </Dialog>
    )
}
