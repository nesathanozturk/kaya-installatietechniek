'use client'

import { IconMenu2, IconMoonFilled, IconSunFilled } from '@tabler/icons-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { SelectBox } from '../../components/select-box'

import NavList from './nav-list'

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
        <nav className="sticky container mx-auto flex justify-between items-center top-5 z-10 py-4 px-6 border rounded-xl bg-white/80 dark:bg-[#1C1B22]/80 border-slate-200 backdrop-blur-xl dark:border-zinc-800">
            <Link href="/" className="text-xl lg:text-2xl font-bold text-orange-500">
                Kaya's Ins.
            </Link>
            <div
                className={`bg-white xl:bg-transparent border-[1px] xl:border-0 sm:px-0 right-2 sm:right-0 z-50 sm:w-72 absolute top-[90px] min-w-fit xl:static xl:top-0 xl:right-0 rounded-xl xl:block sm:h-58 dark:bg-slate-800 dark:border-slate-700 xl:dark:bg-transparent dark:xl:border-transparent ${isMobileMenuOpen ? 'block' : 'hidden'}`}
            >
                <NavList />
            </div>
            <div className="flex justfiy-between items-center gap-4">
                {isClient && (
                    <span
                        className="cursor-pointer hover:text-orange-500 transition-colors"
                        onClick={handleToggleIsDarkMode}
                    >
                        {theme === 'dark' ? <IconSunFilled size={27} /> : <IconMoonFilled size={27} />}
                    </span>
                )}
                <SelectBox />
                {isClient && (
                    <span
                        className="cursor-pointer hover:text-orange-500 transition-colors xl:hidden"
                        onClick={handleToggleIsMobileMenuOpen}
                    >
                        <IconMenu2 size={27} />
                    </span>
                )}
            </div>
        </nav>
    )
}
