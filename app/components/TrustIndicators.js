// components/TrustIndicators.tsx
import { FaShieldAlt, FaChartLine, FaLightbulb, FaHandshake, FaHeadset } from 'react-icons/fa';

export default function TrustIndicators() {
    const trustData = [
        {
            icon: <FaShieldAlt className="text-cyan-500 text-4xl" />,
            value: "100%",
            label: "Security Focus",
            description: "Advanced encryption practices"
        },
        {
            icon: <FaChartLine className="text-cyan-500 text-4xl" />,
            value: "1.5x",
            label: "Early ROI",
            description: "Measurable growth indicators"
        },
        {
            icon: <FaLightbulb className="text-cyan-500 text-4xl" />,
            value: "50+",
            label: "Creative Solutions",
            description: "Tailored innovations"
        },
        {
            icon: <FaHandshake className="text-cyan-500 text-4xl" />,
            value: "1 Year",
            label: "Proven Dedication",
            description: "Focused client success"
        },
        {
            icon: <FaHeadset className="text-cyan-500 text-4xl" />,
            value: "24/7",
            label: "Support Commitment",
            description: "Always available assistance"
        }
    ];

    return (
        <section className="relative py-24 bg-slate-50 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-indigo-600"></div>

            <div className="container mx-auto px-6 relative">
                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-600 rounded-full text-sm font-medium mb-4 shadow-sm">
                        Our Strengths
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Shaping <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-600">Tomorrow's Solutions</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Combining fresh ideas and technology to build digital products that matter.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-24">
                    {trustData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center border border-slate-100 group"
                        >
                            <div className="flex justify-center mb-6">
                                <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl group-hover:from-cyan-100 group-hover:to-blue-100 transition-all">
                                    {item.icon}
                                </div>
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-2">
                                {item.value}
                            </h3>
                            <h4 className="text-xl font-semibold text-slate-800 mb-3">
                                {item.label}
                            </h4>
                            <p className="text-slate-600">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/2 p-12 lg:p-16">
                            <h3 className="text-3xl font-bold text-white mb-6">
                                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Agile</span> Process
                            </h3>
                            <p className="text-slate-300 mb-8 text-lg">
                                A dynamic approach designed to quickly adapt and deliver value from the start.
                            </p>

                            <div className="space-y-8">
                                {[
                                    {
                                        title: "Discovery Phase",
                                        description: "Understanding your vision and business needs"
                                    },
                                    {
                                        title: "Concept Design",
                                        description: "Building clear and user-focused blueprints"
                                    },
                                    {
                                        title: "Development Sprint",
                                        description: "Rapid and quality-driven product creation"
                                    },
                                    {
                                        title: "Quality Assurance",
                                        description: "Testing every detail for reliability"
                                    },
                                    {
                                        title: "Launch & Growth",
                                        description: "Deploying and enhancing with real-world feedback"
                                    }
                                ].map((step, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="flex-shrink-0 mr-6">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyan-600 to-blue-600 text-white font-bold shadow-md">
                                                {index + 1}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                                            <p className="text-slate-300">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2 bg-white p-12 lg:p-16">
                            <h3 className="text-3xl font-bold text-slate-900 mb-6">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-600">Robust</span> Protection
                            </h3>
                            <p className="text-slate-600 mb-8 text-lg">
                                Security measures integrated at every step to safeguard your success.
                            </p>

                            <div className="space-y-6">
                                {[
                                    "Best practices in data security",
                                    "Modern zero-trust principles",
                                    "Frequent security audits",
                                    "Privacy regulations compliance",
                                    "Secure development practices",
                                    "Emergency recovery readiness",
                                    "Multi-layered authentication",
                                    "Real-time threat vigilance"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="flex-shrink-0 mr-4 mt-1">
                                            <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center">
                                                <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="text-slate-700 font-medium">{item}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 pt-8 border-t border-slate-200">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                                            <FaShieldAlt className="text-indigo-600 text-xl" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900">Security-First Approach</h4>
                                        <p className="text-slate-600">Embedded into every project from day one</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
