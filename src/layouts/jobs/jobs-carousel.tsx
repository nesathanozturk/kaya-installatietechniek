'use client'

import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import * as React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

import { images } from '@/constants/images'

export function JobsCarousel() {
    const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))

    return (
        <section className="w-full">
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
                                            className="object-contain rounded-md h-full"
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
        </section>
    )
}
