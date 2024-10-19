'use client'

import { SelectBox } from '../../components/select-box'
import { IconMenu2, IconMoonFilled, IconSunFilled } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import MobileMenu from './components/mobile-menu'
import NavList from './components/nav-list'

export function Navbar() {
    const { theme, setTheme } = useTheme()
    const [isClient, setIsClient] = useState<boolean>(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

    const handleToggleIsMobileMenuOpen = () => setIsMobileMenuOpen(prev => !prev)

    const handleToggleIsDarkMode = () => setTheme(theme === 'dark' ? 'light' : 'dark')

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <nav>
            <motion.div
                initial={{
                    opacity: 0,
                    y: -50,
                }}
                whileInView={{
                    opacity: 1,
                    y: 20,
                    transition: {
                        duration: 0.5,
                        delay: 0.2,
                    },
                }}
                viewport={{ once: true }}
                className="container sticky top-5 z-10 mx-auto flex items-center justify-between rounded-xl border border-slate-200 bg-white/80 px-6 py-4 backdrop-blur-xl dark:border-zinc-800 dark:bg-[#1C1B22]/80"
            >
                <Link href="/" className="text-xl font-bold text-orange-500 lg:text-2xl">
                    Kaya's Ins.
                </Link>
                <div className="hidden xl:block">
                    <NavList />
                </div>
                <div className="justfiy-between flex items-center gap-4">
                    {isClient && (
                        <span
                            className="cursor-pointer transition-colors hover:text-orange-500"
                            onClick={handleToggleIsDarkMode}
                        >
                            {theme === 'dark' ? <IconSunFilled size={27} /> : <IconMoonFilled size={27} />}
                        </span>
                    )}
                    <SelectBox />
                    {isClient && (
                        <span
                            className="cursor-pointer transition-colors hover:text-orange-500 xl:hidden"
                            onClick={handleToggleIsMobileMenuOpen}
                        >
                            <IconMenu2 size={27} />
                        </span>
                    )}
                </div>
                {isMobileMenuOpen && <MobileMenu />}
            </motion.div>
        </nav>
    )
}
