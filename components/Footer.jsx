"use client"

import {
    FaFacebookF,
    FaWhatsapp,
    FaInstagram,
} from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";
export default function Footer() {
    return (
        <footer className="bg-[#021a1f] text-gray-300 px-6 md:px-28 py-12 md:pb-12 md:pt-20 text-md">
            <div
                className="max-w-9xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12"
            >
                {/* Logo & Description */}
                <div>
                    <img
                        src="/logo.png"
                        alt="Anmol Cultural Club Logo"
                        className="h-12 md:h-14 w-auto mb-3"
                    />
                    <p className="mt-4 text-gray-400">
                        Anmol Cultural Club is a non-profit organization dedicated to empowering communities through cultural, educational, and social initiatives.
                    </p>
                    <div className="flex gap-3 mt-6">
                        <Link
                            href="https://wa.me/919622360431"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 flex items-center justify-center border border-gray-400 text-gray-400 hover:text-white transition rounded"
                        >
                            <FaWhatsapp size={20} />
                        </Link>
                        <Link
                            href="https://facebook.com/anmolculturalclub"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 flex items-center justify-center border border-gray-400 text-gray-400 hover:text-white transition rounded"
                        >
                            <FaFacebookF size={20} />
                        </Link>
                        <Link
                            href="https://instagram.com/anmolculturalclub"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 flex items-center justify-center border border-gray-400 text-gray-400 hover:text-white transition rounded"
                        >
                            <FaInstagram size={20} />
                        </Link>
                    </div>
                </div>

                {/* Address Section */}
                <div
                >
                    <h2 className="text-white text-lg font-semibold mb-4">Address</h2>
                    <ul className="space-y-3 text-gray-400">
                        <li
                            className="flex items-start gap-2"
                        >
                            <HiOutlineLocationMarker className="mt-1" size={20} />
                            Ainpur, Sunderbani, Rajouri, J&K, 185153
                        </li>
                        <li
                            className="flex items-start gap-2"
                        >
                            <FiPhone className="mt-1" size={20} />
                            +91 9622360431
                        </li>
                        <li
                            className="flex items-start gap-2"
                        >
                            <HiOutlineMail className="mt-1" size={20} />
                            anmolculturalclub@gmail.com
                        </li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div
                >
                    <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
                    <ul className="space-y-3 text-gray-400">
                        {[
                            { href: "/about", label: "About us" },
                            { href: "/causes", label: "Causes" },
                            { href: "gallery", label: "Gallery" },
                            { href: "contact", label: "Contact us" },
                        ].map((link, idx) => (
                            <li
                            >
                                <Link href={link.href} className="hover:text-orange-500 flex items-center transition">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Bottom Footer */}
            <div
                className="mt-12 border-t border-gray-700 pt-6 md:px-0 text-center flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm md:text-md"
            >
                <p>© <Link href="https://anmolculturalclub.in/" className="hover:text-orange-500 cursor-pointer">anmolculturalclub.in</Link>. All Rights Reserved.</p>
                <p>
                    Designed and Developed By <Link href="https://vyaparguruinfotech.in/" target="_blank" className="text-white hover:text-orange-500 cursor-pointer">Vyapar Guru Infotech Pvt. Ltd.</Link>
                </p>
            </div>
        </footer>
    );
}