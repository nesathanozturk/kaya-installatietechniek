import { MessageSquareMore } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { buttonVariants } from '@/components/ui/button'

import plumber from '@/assets/images/plumber.png'

function Hero() {
    return (
        <section
            id="home"
            className="container mx-auto flex px-5 py-24 md:flex-row flex-col-reverse items-center gap-12 md:gap-0"
        >
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <div className="mb-6">
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-7xl mb-1 text-transparent bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text">
                        Efficiëntie en professionaliteit in elke druppel!
                    </h1>
                </div>
                <p className="leading-7 font-semibold text-gray-700 dark:text-gray-300">
                    Professionele loodgietersdiensten voor al uw behoeften, van lekkages en verstoppingen tot cv-ketel
                    onderhoud. Snel, betrouwbaar en betaalbaar!
                </p>
                <div className="flex justify-center mt-8">
                    <Link href="#contact-opnemen" className={buttonVariants({ size: 'default' })}>
                        <MessageSquareMore className="mr-2 h-4 w-4" />
                        Contact op
                    </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Image src={plumber} alt="A cartoonish illustration of a plumber fixing a broken pipe, with water spilling out, using tools like a wrench. The plumber should be wearing overall" className="object-cover object-center" />
            </div>
        </section>
    )
}

export default Hero
