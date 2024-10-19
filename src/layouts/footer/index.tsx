'use client'

import { motion } from 'framer-motion'

function Footer() {
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
                    delay: 0.2,
                },
            }}
            viewport={{ once: true }}
            className="mt-12 text-gray-600"
        >
            <footer className="container mx-auto flex flex-col items-center justify-center px-5 py-8 md:flex-row">
                <a className="title-font flex items-center justify-center font-semibold text-orange-500 dark:text-orange-400 md:justify-start">
                    <span className="ml-3 text-lg md:text-xl">Kaya's Installatietechniek</span>
                </a>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-200 sm:ml-4 sm:mt-0 sm:py-2 sm:pl-4 md:border-l-2 md:border-gray-200 md:dark:border-slate-700">
                    © {new Date().getFullYear()} &nbsp;Kaya's Installatietechniek &nbsp; — &nbsp;
                    <a
                        href="https://instagram.com/nesathanozturk"
                        className="ml-1 text-gray-600 hover:underline dark:text-gray-200"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        @nesathanozturk
                    </a>
                </p>
            </footer>
        </motion.div>
    )
}

export default Footer
