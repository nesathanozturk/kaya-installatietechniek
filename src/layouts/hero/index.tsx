'use client'

import { motion } from 'framer-motion'
import { MessageSquareMore } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'

import plumber from '@/assets/images/plumber.png'

function Hero() {
    return (
        <section
            id="home"
            className="container z-10 mx-auto flex flex-col-reverse items-center gap-12 px-5 py-24 md:flex-row md:gap-0"
        >
            <motion.div
                initial={{
                    opacity: 0,
                    x: -50,
                }}
                whileInView={{
                    opacity: 1,
                    x: -10,
                    transition: {
                        duration: 0.5,
                        delay: 0.2,
                    },
                }}
                viewport={{ once: true }}
                className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-2/3 md:items-start md:pr-16 md:text-left lg:pr-24"
            >
                <div className="mb-6">
                    <h1 className="mb-1 bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent lg:text-7xl">
                        Efficiëntie en professionaliteit in elke druppel!
                    </h1>
                </div>
                <p className="font-semibold leading-7 text-gray-700 dark:text-gray-300">
                    Professionele loodgietersdiensten voor al uw behoeften, van lekkages en verstoppingen tot cv-ketel
                    onderhoud. Snel, betrouwbaar en betaalbaar!
                </p>
                <div className="mt-8 flex justify-center">
                    <Link href="#contact-opnemen" className={buttonVariants({ size: 'default' })}>
                        <MessageSquareMore className="mr-2 h-4 w-4" />
                        Contact op
                    </Link>
                </div>
            </motion.div>
            <motion.div
                initial={{
                    opacity: 0,
                    x: 50,
                }}
                whileInView={{
                    opacity: 1,
                    x: -10,
                    transition: {
                        duration: 0.5,
                        delay: 0.2,
                    },
                }}
                viewport={{ once: true }}
                className="z-40 w-2/3 lg:max-w-sm"
            >
                <Image
                    src={plumber}
                    alt="A cartoonish illustration of a plumber fixing a broken pipe, with water spilling out, using tools like a wrench."
                    className="object-cover object-center"
                />
            </motion.div>
        </section>
    )
}

export default Hero
