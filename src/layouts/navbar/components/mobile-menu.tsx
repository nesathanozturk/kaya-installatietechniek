'use client'

import { motion } from 'framer-motion'

import NavList from './nav-list'

function MobileMenu() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="h-58 absolute right-4 top-[90px] z-50 rounded-xl border-[1px] bg-white dark:border-zinc-800 dark:bg-[#1C1B22] sm:right-0 sm:w-72 sm:px-0 xl:hidden"
        >
            <NavList />
        </motion.div>
    )
}

export default MobileMenu
