import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'

import { ThemeProvider } from '@/components/theme-provider'

import WhatsappButton from "@/components/whatsapp-button"
import Footer from '@/layouts/footer'
import { Navbar } from '@/layouts/navbar'
import './globals.css'

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
    icons: {
        icon: '/icon.ico',
    },
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
                    <WhatsappButton />
                </ThemeProvider>
            </body>
        </html>
    )
}
