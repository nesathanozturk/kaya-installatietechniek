'use client'

import Autoplay from 'embla-carousel-autoplay'
import { motion } from 'framer-motion'
import Image from 'next/image'
import * as React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

import { images } from '@/constants/images'

export function JobsCarousel() {
    const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -30,
            }}
            whileInView={{
                opacity: 1,
                y: 10,
                transition: {
                    duration: 0.5,
                    delay: 0.3,
                },
            }}
            viewport={{ once: true }}
            className="w-full"
        >
            <div className="mx-auto lg:max-w-6xl">
                <Carousel
                    plugins={[plugin.current]}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent>
                        {images.map(image => (
                            <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            className="h-full rounded-md object-contain"
                                            loading="lazy"
                                        />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </motion.div>
    )
}
