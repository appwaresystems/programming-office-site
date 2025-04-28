// app/work/page.js
'use client';

import { useState } from 'react';
import { FaCode, FaServer, FaMobileAlt, FaChartLine, FaShieldAlt, FaCalendarAlt, FaClock, FaTimes } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function ConsultationModal({ isOpen, onClose }) {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const timeSlots = Array.from({ length: 17 }, (_, i) => {
        const hour = 9 + Math.floor(i / 2);
        const minutes = i % 2 === 0 ? '00' : '30';
        return `${hour}:${minutes}`;
    });

    const resetForm = () => {
        setSelectedDate(null);
        setSelectedTime('');
        setName('');
        setEmail('');
        setSubmitStatus(null);
    };

    const handleClose = () => {
        resetForm();
        onClose();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedDate || !selectedTime || !name || !email) {
            setSubmitStatus({ success: false, message: 'Please fill in all fields.' });
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            setSubmitStatus({ success: true, message: 'Consultation booked successfully!' });
            resetForm();
            setTimeout(onClose, 2000);
        } catch (error) {
            setSubmitStatus({ success: false, message: error.message });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 z-40 backdrop-blur-sm bg-black/30" />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                        aria-label="Close"
                    >
                        <FaTimes className="w-6 h-6" />
                    </button>

                    <h3 className="text-2xl font-bold text-center mb-6 text-slate-900">
                        Schedule a Free Consultation
                    </h3>

                    {submitStatus && (
                        <div className={`mb-6 p-4 rounded-lg text-center ${
                            submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                            {submitStatus.message}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-black"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-black"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                                Select Date
                            </label>
                            <div className="relative">
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={(date) => setSelectedDate(date)}
                                    minDate={new Date()}
                                    filterDate={(date) => date.getDay() !== 0 && date.getDay() !== 6}
                                    className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 pl-10 text-black"
                                    placeholderText="Select a date"
                                    required
                                />
                                <FaCalendarAlt className="absolute left-3 top-3.5 text-gray-400" />
                            </div>
                        </div>

                        {selectedDate && (
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    Select Time (UTC)
                                </label>
                                <div className="relative">
                                    <select
                                        value={selectedTime}
                                        onChange={(e) => setSelectedTime(e.target.value)}
                                        className="w-full px-4 py-3 border border-black rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 pl-10 appearance-none text-black"
                                        required
                                    >
                                        <option value="">Select a time</option>
                                        {timeSlots.map((slot) => (
                                            <option key={slot} value={slot}>
                                                {slot}
                                            </option>
                                        ))}
                                    </select>
                                    <FaClock className="absolute left-3 top-3.5 text-gray-400" />
                                </div>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3 rounded-lg text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 focus:ring-2 focus:ring-cyan-500 disabled:opacity-70 transition-all"
                        >
                            {isSubmitting ? 'Booking...' : 'Confirm Booking'}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default function PortfolioPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const projects = [
        {
            name: "Enterprise CRM System",
            description: "A comprehensive customer relationship management platform for large enterprises with custom workflow automation.",
            tags: ["Web Application", "CRM", "Enterprise"],
            icon: <FaServer className="text-cyan-500 text-4xl" />,
            images: [
                "/images/projects/crm-1.jpg",
                "/images/projects/crm-2.jpg",
                "/images/projects/crm-3.jpg"
            ]
        },
        {
            name: "E-commerce Mobile App",
            description: "Cross-platform mobile application with AR product visualization and seamless payment integration.",
            tags: ["Mobile", "E-commerce", "React Native"],
            icon: <FaMobileAlt className="text-cyan-500 text-4xl" />,
            images: [
                "/images/projects/ecom-1.jpg",
                "/images/projects/ecom-2.jpg"
            ]
        },
        {
            name: "Healthcare Analytics Dashboard",
            description: "Real-time data visualization platform for hospital performance metrics and patient outcomes.",
            tags: ["Data Visualization", "Healthcare", "Analytics"],
            icon: <FaChartLine className="text-cyan-500 text-4xl" />,
            images: [
                "/images/projects/health-1.jpg",
                "/images/projects/health-2.jpg",
                "/images/projects/health-3.jpg"
            ]
        },
        {
            name: "Banking Security System",
            description: "Multi-factor authentication and fraud detection system for online banking platforms.",
            tags: ["Security", "Finance", "Authentication"],
            icon: <FaShieldAlt className="text-cyan-500 text-4xl" />,
            images: [
                "/images/projects/bank-1.jpg",
                "/images/projects/bank-2.jpg"
            ]
        },
        {
            name: "Education Platform",
            description: "Interactive learning management system with AI-powered course recommendations.",
            tags: ["EdTech", "LMS", "AI"],
            icon: <FaCode className="text-cyan-500 text-4xl" />,
            images: [
                "/images/projects/edu-1.jpg",
                "/images/projects/edu-2.jpg",
                "/images/projects/edu-3.jpg"
            ]
        },
        {
            name: "Logistics Optimization",
            description: "Route optimization and fleet management system for logistics companies.",
            tags: ["Logistics", "Optimization", "IoT"],
            icon: <FaChartLine className="text-cyan-500 text-4xl" />,
            images: [
                "/images/projects/logistics-1.jpg",
                "/images/projects/logistics-2.jpg"
            ]
        }
    ];

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <main className="pt-16">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 to-indigo-900 text-white pt-24 pb-32 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-indigo-600"></div>
                <div className="container mx-auto px-6 text-center relative">
                    <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-600 rounded-full text-sm font-medium mb-4 shadow-sm">
                        Our Portfolio
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Projects</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        Explore our successful implementations across various industries and technologies.
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="relative py-24 bg-slate-50 overflow-hidden">
                <div className="container mx-auto px-6 relative">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-600">Work</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Delivering innovative solutions that drive business growth and transformation.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 group"
                            >
                                <div className="flex justify-center mb-6">
                                    <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl group-hover:from-cyan-100 group-hover:to-blue-100 transition-all">
                                        {project.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                    {project.name}
                                </h3>
                                <p className="text-slate-600 mb-6">
                                    {project.description}
                                </p>

                                {/* Project Images Carousel (simplified) */}
                                <div className="mb-6 rounded-lg overflow-hidden">
                                    <img
                                        src={project.images[0]}
                                        alt={project.name}
                                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-cyan-50 text-cyan-600 rounded-full text-xs font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
                        <div className="flex flex-col lg:flex-row">
                            <div className="lg:w-1/2 p-12 lg:p-16">
                                <h3 className="text-3xl font-bold text-white mb-6">
                                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Approach</span>
                                </h3>
                                <p className="text-slate-300 mb-8 text-lg">
                                    A proven methodology for delivering successful digital products.
                                </p>

                                <div className="space-y-8">
                                    {[
                                        {
                                            title: "Requirement Analysis",
                                            description: "Deep dive into business objectives and user needs"
                                        },
                                        {
                                            title: "Solution Design",
                                            description: "Creating architecture blueprints and UI prototypes"
                                        },
                                        {
                                            title: "Agile Development",
                                            description: "Iterative development with continuous feedback"
                                        },
                                        {
                                            title: "Quality Testing",
                                            description: "Rigorous testing at every development phase"
                                        },
                                        {
                                            title: "Deployment & Support",
                                            description: "Seamless launch and ongoing maintenance"
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
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-indigo-600">Technologies</span> We Use
                                </h3>
                                <p className="text-slate-600 mb-8 text-lg">
                                    Modern tech stack for building scalable and secure applications.
                                </p>

                                <div className="space-y-6">
                                    {[
                                        "React & Next.js for frontend",
                                        "Node.js & Python for backend",
                                        "AWS, Azure & GCP for cloud",
                                        "Docker & Kubernetes for deployment",
                                        "MongoDB & PostgreSQL for databases",
                                        "TensorFlow & PyTorch for AI/ML",
                                        "React Native for mobile apps",
                                        "GraphQL & REST APIs"
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
                                                <FaCode className="text-indigo-600 text-xl" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-900">Custom Development</h4>
                                            <p className="text-slate-600">Tailored solutions for your unique business needs</p>
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
                    <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
                    <p className="text-xl max-w-3xl mx-auto mb-8">
                        Let's discuss how we can bring your vision to life with our expertise.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={openModal}
                            className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
                        >
                            Request Consultation
                        </button>
                    </div>
                </div>
            </section>

            {/* Consultation Modal */}
            <ConsultationModal isOpen={isModalOpen} onClose={closeModal} />
        </main>
    );
}