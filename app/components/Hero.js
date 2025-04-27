'use client'

// components/Hero.tsx
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ConsultationModal from './ConsultationModal';  // Импортируем модалку

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Открытие модалки
    const openModal = () => setIsModalOpen(true);

    // Закрытие модалки
    const closeModal = () => setIsModalOpen(false);

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-indigo-900 text-white min-h-screen flex items-center">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600 rounded-full mix-blend-overlay filter blur-3xl animate-float"></div>
                <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-violet-600 rounded-full mix-blend-overlay filter blur-3xl animate-float-delay"></div>
            </div>

            <div className="container mx-auto px-6 py-24 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <div className="mb-8">
                            <span className="inline-block px-4 py-2 bg-indigo-600/30 backdrop-blur-sm rounded-full text-indigo-200 text-sm font-medium border border-indigo-400/30">
                                Your Trusted Digital Solutions Partner
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white">Transform</span> Your Digital Strategy
                        </h1>

                        <p className="text-xl text-slate-200 mb-10 max-w-2xl">
                            We specialize in crafting innovative and efficient digital solutions that empower businesses to grow and engage their audiences.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <button
                                onClick={openModal} // Открываем модалку по клику
                                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg transition-all hover:shadow-xl hover:scale-[1.02] text-center shadow-lg shadow-blue-500/20"
                            >
                                Schedule Your Free Consultation
                            </button>
                            <Link
                                href="/portfolio"
                                className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-lg transition-all hover:bg-white/10 hover:shadow-lg hover:scale-[1.02] text-center backdrop-blur-sm"
                            >
                                Explore Our Portfolio
                            </Link>
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-1 border border-white/10">
                            <Image
                                src="/images/hero-image.png"
                                alt="Modern web application dashboard"
                                width={800}
                                height={600}
                                className="w-full h-auto"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                        </div>
                        <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-violet-600 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
                    </div>
                </div>
            </div>

            {/* Модалка будет показываться, если isModalOpen равно true */}
            <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />
        </section>
    );
}
