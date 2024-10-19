'use client'

import { motion } from 'framer-motion'

import { contactInfos } from '@/constants/contact-infos'

function ContactInfoCard() {
    const renderedContactInfos = contactInfos.map((contactInfo, index) => (
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
                    delay: 0.3 + index * 0.15,
                },
            }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center rounded-md border p-5 text-center shadow-md dark:border-zinc-700 dark:bg-gradient-to-r dark:from-slate-800/10 dark:to-zinc-900"
            key={contactInfo.title}
        >
            <div>
                {contactInfo.icon}
                <div className="mt-3">
                    <p className="mb-1 text-base font-bold leading-none md:text-lg">{contactInfo.title}</p>
                    <p className="text-muted-foreground word-wrap text-xs md:text-sm">{contactInfo.description}</p>
                </div>
            </div>
        </motion.div>
    ))

    return <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">{renderedContactInfos}</div>
}

export default ContactInfoCard
