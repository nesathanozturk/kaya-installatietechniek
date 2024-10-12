'use client'

import { contactInfos } from '@/constants/contact-infos'

function ContactInfoCard() {
    const renderedContactInfos = contactInfos.map(contactInfo => (
        <div
            className="flex flex-col dark:bg-gradient-to-r dark:from-slate-800/10 dark:to-zinc-900 text-center items-center justify-center rounded-md border dark:border-zinc-700 p-5 shadow-md"
            key={contactInfo.title}
        >
            {contactInfo.icon}
            <div className="mt-4">
                <p className="text-base md:text-lg font-bold leading-none mb-2">{contactInfo.title}</p>
                <p className="text-xs md:text-sm text-muted-foreground word-wrap">{contactInfo.description}</p>
            </div>
        </div>
    ))

    return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">{renderedContactInfos}</div>
}

export default ContactInfoCard
