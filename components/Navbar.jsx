'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Causes', href: '/causes' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
    const pathname = usePathname()
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="fixed top-0 left-0 w-full bg-[#021a1f] text-white px-6 md:px-12 py-3 md:py-3 flex justify-between items-center shadow-lg z-50"
        >
            <Link href="/" className="flex items-center space-x-2">
                <motion.img
                    src="/logo.png" 
                    alt="Logo"
                    className="h-12 w-auto md:h-14"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, type: "spring" }}
                />
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`text-md font-medium transition-colors ${pathname === link.href ? 'text-orange-500' : 'hover:text-orange-400'
                            }`}
                    >
                        {link.name}
                    </Link>
                ))}
                <Link
                    href="/donate"
                    className="border-2 border-orange-500 hover:bg-orange-500 text-orange-500 hover:text-white text-md font-semibold px-4 py-2 rounded-md flex items-center gap-2 transition-all"
                >
                    Donate Now <span className="text-lg">➔</span>
                </Link>
            </div>

            {/* Hamburger Icon */}
            <button
                className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label="Toggle menu"
            >
                <motion.span
                    animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                    className="block w-8 h-1 bg-orange-500 rounded mb-1"
                />
                <motion.span
                    animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="block w-8 h-1 bg-orange-500 rounded mb-1"
                />
                <motion.span
                    animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                    className="block w-8 h-1 bg-orange-500 rounded"
                />
            </button>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className="fixed top-0 right-0 w-3/4 max-w-xs h-full bg-[#021a1f] shadow-lg flex flex-col items-center pt-24 space-y-8 z-40"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-xl font-semibold transition-colors ${pathname === link.href ? 'text-orange-500' : 'hover:text-orange-400'
                                    }`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/donate"
                            className="border-2 border-orange-500 hover:bg-orange-500 text-orange-500 hover:text-white text-lg font-semibold px-6 py-3 rounded-md flex items-center gap-2 transition-all"
                            onClick={() => setMenuOpen(false)}
                        >
                            Donate Now <span className="text-2xl">➔</span>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}