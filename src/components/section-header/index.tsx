'use client'

import { motion } from 'framer-motion'

type SectionHeaderProps = {
    sectionName: string
    title: string
    subTitle: string
    description: string
    isCenterItems?: boolean
    children: React.ReactNode
}

function SectionHeader({
    sectionName,
    title,
    subTitle,
    description,
    isCenterItems = true,
    children,
}: SectionHeaderProps) {
    return (
        <section
            id={sectionName}
            className={`flex flex-col justify-center px-6 lg:px-0 ${isCenterItems ? 'items-center' : undefined}`}
        >
            <div className="mb-6 flex flex-col items-center text-center">
                <motion.h4
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: -10,
                        transition: {
                            duration: 0.5,
                            delay: 0.1,
                        },
                    }}
                    viewport={{ once: true }}
                    className="rounded-full border px-4 py-[6px] text-base font-extrabold text-orange-400 shadow-md dark:border-orange-500 dark:bg-orange-500 dark:text-white sm:py-[7px] lg:text-lg"
                >
                    {title}
                </motion.h4>
                <motion.h2
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: -10,
                        transition: {
                            duration: 0.5,
                            delay: 0.2,
                        },
                    }}
                    viewport={{ once: true }}
                    className="mb-6 mt-4 bg-gradient-to-r from-zinc-700 to-gray-400 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent dark:from-zinc-200 dark:to-gray-500 lg:text-4xl"
                >
                    {subTitle}
                </motion.h2>
                <div className="lg:w-[900px]">
                    <motion.p
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
                        className="mb-6 text-sm font-medium leading-7 text-zinc-700 dark:text-zinc-400 lg:text-base"
                    >
                        {description}
                    </motion.p>
                </div>
            </div>
            {children}
        </section>
    )
}

export default SectionHeader
