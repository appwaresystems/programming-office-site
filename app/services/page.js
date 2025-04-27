// app/services/page.js
import { FaShieldAlt, FaChartLine, FaLightbulb, FaHandshake, FaHeadset } from 'react-icons/fa';

export default function ServicesPage() {
    const services = [
        {
            title: "Custom Software Development",
            description: "Tailored solutions designed to meet your specific business needs, built with scalable architectures.",
            icon: <FaLightbulb className="text-cyan-500 text-4xl" />,
            features: [
                "Web applications",
                "Enterprise software",
                "CRM/ERP systems",
                "Workflow automation"
            ]
        },
        {
            title: "Product Support & Maintenance",
            description: "Comprehensive support packages to keep your systems running smoothly 24/7.",
            icon: <FaHeadset className="text-cyan-500 text-4xl" />,
            features: [
                "Bug fixes and patches",
                "Performance optimization",
                "Security updates",
                "Version upgrades"
            ]
        },
        {
            title: "Cloud Solutions",
            description: "Migration, deployment and management of cloud infrastructure for optimal performance.",
            icon: <FaChartLine className="text-cyan-500 text-4xl" />,
            features: [
                "AWS/Azure/GCP integration",
                "Serverless architectures",
                "Containerization",
                "DevOps automation"
            ]
        },
        {
            title: "IT Consulting",
            description: "Strategic guidance to align technology with your business objectives.",
            icon: <FaHandshake className="text-cyan-500 text-4xl" />,
            features: [
                "Technology audits",
                "Digital transformation",
                "System architecture",
                "Roadmapping"
            ]
        },
        {
            title: "Product Modernization",
            description: "Breathing new life into legacy systems with modern technologies.",
            icon: <FaChartLine className="text-cyan-500 text-4xl" />,
            features: [
                "UI/UX redesign",
                "Database migration",
                "API integration",
                "Performance tuning"
            ]
        },
        {
            title: "Managed IT Services",
            description: "Complete outsourced IT operations so you can focus on your business.",
            icon: <FaShieldAlt className="text-cyan-500 text-4xl" />,
            features: [
                "Proactive monitoring",
                "Data backup solutions",
                "Network management",
                "Help desk support"
            ]
        }
    ];

    const supportPlans = [
        {
            name: "Basic",
            price: "$999/mo",
            features: [
                "8x5 support (business hours)",
                "Email ticketing",
                "Monthly system check",
                "Standard response time"
            ],
            bestFor: "Small businesses with minimal support needs"
        },
        {
            name: "Professional",
            price: "$2,499/mo",
            features: [
                "24x5 support",
                "Phone/email/chat",
                "Weekly system checks",
                "Priority response time",
                "Quarterly performance review"
            ],
            bestFor: "Growing businesses with critical systems"
        },
        {
            name: "Enterprise",
            price: "Custom",
            features: [
                "24x7 dedicated support",
                "SLA-backed response times",
                "Account manager",
                "Monthly health reports",
                "Emergency onsite support",
                "Custom development hours"
            ],
            bestFor: "Large enterprises with mission-critical systems"
        }
    ];

    return (
        <main className="pt-16">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 to-indigo-900 text-white pt-24 pb-32 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-indigo-600"></div>
                <div className="container mx-auto px-6 text-center relative">
                    <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-600 rounded-full text-sm font-medium mb-4 shadow-sm">
                        Our Services
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        IT Solutions & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Support Services</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        Comprehensive technology services from product development to ongoing support and optimization.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="relative py-24 bg-slate-50 overflow-hidden">
                <div className="container mx-auto px-6 relative">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-600">Core Services</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Combining fresh ideas and technology to build digital products that matter.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 group"
                            >
                                <div className="flex justify-center mb-6">
                                    <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl group-hover:from-cyan-100 group-hover:to-blue-100 transition-all">
                                        {service.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 mb-6">
                                    {service.description}
                                </p>
                                <ul className="space-y-3">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <div className="flex-shrink-0 mr-4 mt-1">
                                                <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center">
                                                    <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <span className="text-slate-700 font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
                        <div className="flex flex-col lg:flex-row">
                            <div className="lg:w-1/2 p-12 lg:p-16">
                                <h3 className="text-3xl font-bold text-white mb-6">
                                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Development</span> Process
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
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-600">Security</span> Measures
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

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-cyan-600 to-blue-600 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Build or Optimize Your IT Products?</h2>
                    <p className="text-xl max-w-3xl mx-auto mb-8">
                        Our team of experts is ready to discuss your project requirements and support needs.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg">
                            Request Consultation
                        </button>
                        <button className="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors shadow-lg">
                            Contact Support
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}