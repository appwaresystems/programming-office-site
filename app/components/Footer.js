// components/Footer.js
'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Appware Systems
                        </h3>
                        <p className="text-slate-300 mb-4">
                            Building innovative digital solutions that drive business growth and transform user experiences.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors">
                                <FaGithub className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors">
                                <FaLinkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors">
                                <FaTwitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-slate-300 hover:text-cyan-400 transition-colors">
                                <FaEnvelope className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#services" className="text-slate-300 hover:text-cyan-400 transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="#portfolio" className="text-slate-300 hover:text-cyan-400 transition-colors">
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link href="#careers" className="text-slate-300 hover:text-cyan-400 transition-colors">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-2 text-slate-300">
                            <li>123 Business Ave</li>
                            <li>San Francisco, CA 94107</li>
                            <li>info@appwaresystems.com</li>
                            <li>+1 (555) 123-4567</li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
                    <p>© {currentYear} Appware Systems. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}