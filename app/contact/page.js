'use client';

import { useState, useEffect } from 'react';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [captchaQuestion, setCaptchaQuestion] = useState('');
    const [captchaAnswer, setCaptchaAnswer] = useState('');
    const [userCaptchaInput, setUserCaptchaInput] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    useEffect(() => {
        generateCaptcha();
    }, []);

    const generateCaptcha = () => {
        const a = Math.floor(Math.random() * 10);
        const b = Math.floor(Math.random() * 10);
        setCaptchaQuestion(`${a} + ${b}`);
        setCaptchaAnswer((a + b).toString());
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (userCaptchaInput !== captchaAnswer) {
            setSubmitStatus({ success: false, message: 'Captcha incorrect. Please try again.' });
            generateCaptcha();
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus({ success: true, message: 'Message sent successfully!' });
                setFormData({ name: '', email: '', subject: '', message: '' });
                setUserCaptchaInput('');
                generateCaptcha();
            } else {
                throw new Error(data.message || 'Failed to send message');
            }
        } catch (error) {
            setSubmitStatus({ success: false, message: error.message });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="pt-16">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 to-indigo-900 text-white pt-24 pb-32 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-indigo-600"></div>
                <div className="container mx-auto px-6 text-center relative">
          <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-600 rounded-full text-sm font-medium mb-4 shadow-sm">
            Get In Touch
          </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Us</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        Have questions or want to discuss a project? We'd love to hear from you.
                    </p>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="relative py-24 bg-slate-50 overflow-hidden">
                <div className="container mx-auto px-6 relative">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">
                                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-600">Office</span>
                            </h2>

                            <div className="space-y-8">
                                {/*<div className="flex items-start">*/}
                                {/*    <div className="flex-shrink-0 mr-6 mt-1">*/}
                                {/*        <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">*/}
                                {/*            <FaMapMarkerAlt className="text-cyan-600 text-xl" />*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*    <div>*/}
                                {/*        <h3 className="text-xl font-bold text-slate-900 mb-2">Location</h3>*/}
                                {/*        <p className="text-slate-600">123 Tech Street<br />San Francisco, CA 94107</p>*/}
                                {/*    </div>*/}
                                {/*</div>*/}

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mr-6 mt-1">
                                        <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                                            <FaPhone className="text-cyan-600 text-xl" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Phone</h3>
                                        <p className="text-slate-600">+374 (98) 03-20-71</p>
                                        <p className="text-slate-600">+374 (99) 11-47-87</p>

                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mr-6 mt-1">
                                        <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                                            <FaEnvelope className="text-cyan-600 text-xl" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Email</h3>
                                        <p className="text-slate-600">appwaresystemsco@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">
                                Send Us a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-indigo-600">Message</span>
                            </h2>

                            {submitStatus && (
                                <div className={`mb-6 p-4 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                    {submitStatus.message}
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="grid gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="5"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                                        ></textarea>
                                    </div>

                                    <div>
                                        <label htmlFor="captcha" className="block text-sm font-medium text-slate-700 mb-1">Captcha: {captchaQuestion}</label>
                                        <input
                                            type="text"
                                            id="captcha"
                                            name="captcha"
                                            value={userCaptchaInput}
                                            onChange={(e) => setUserCaptchaInput(e.target.value)}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-bold hover:shadow-lg transition-all disabled:opacity-70"
                                    >
                                        {isSubmitting ? (
                                            'Sending...'
                                        ) : (
                                            <>
                                                <FaPaperPlane className="mr-2" />
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-cyan-600 to-blue-600 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
                    <p className="text-xl max-w-3xl mx-auto mb-8">
                        Our team is ready to discuss your requirements and provide the best solution.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg">
                            Request Consultation
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
