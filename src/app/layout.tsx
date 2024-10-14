import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Link from 'next/link'
import { WhatsappIcon } from 'react-share'

import { ThemeProvider } from '@/components/theme-provider'

import './globals.css'
import Footer from '@/layouts/footer'
import { Navbar } from '@/layouts/navbar'

const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: "Kaya's Installatietechniek",
    description:
        'Professionele loodgietersdiensten voor al uw behoeften, van lekkages en verstoppingen tot cv-ketel onderhoud. Snel, betrouwbaar en betaalbaar!',
    generator: 'Next.js',
    applicationName: "Kaya's Installatietechniek",
    referrer: 'origin-when-cross-origin',
    keywords: ['loodgieter', 'installateur', 'cv-ketel', 'lekkage', 'verstopping', 'onderhoud'],
    robots: 'index, follow',
    openGraph: {
        type: 'website',
        locale: 'nl_NL',
        siteName: "Kaya's Installatietechniek",
        title: "Kaya's Installatietechniek",
        description:
            'Professionele loodgietersdiensten voor al uw behoeften, van lekkages en verstoppingen tot cv-ketel onderhoud. Snel, betrouwbaar en betaalbaar!',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${jakartaSans.className} antialiased`}>
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
                    <Navbar />
                    {children}
                    <Footer />
                    <Link
                        className="fixed bottom-7 right-10 animate-bounce"
                        href={process.env.NEXT_PUBLIC_WHATSAPP_URL as string}
                        target="_blank"
                    >
                        <WhatsappIcon className="hover:opacity-80 transition-opacity" size={50} round={true} />
                    </Link>
                </ThemeProvider>
            </body>
        </html>
    )
}
