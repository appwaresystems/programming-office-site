'use client';

import { useState } from 'react';
import { FaTimes, FaPaperclip, FaSpinner } from 'react-icons/fa';

export default function ApplicationModal({ isOpen, onClose, positionTitle }) {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        coverLetter: '',
    });
    const [cvFile, setCvFile] = useState(null);
    const [fileName, setFileName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setCvFile(file);
            setFileName(file.name);
        }
    };

    const resetForm = () => {
        setFormData({
            name: '',
            surname: '',
            email: '',
            phone: '',
            coverLetter: '',
        });
        setCvFile(null);
        setFileName('');
        setSubmitStatus(null);
    };

    const handleClose = () => {
        resetForm();
        onClose();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.surname || !formData.email || !formData.phone || !cvFile) {
            setSubmitStatus({ success: false, message: 'Please fill in all required fields.' });
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('surname', formData.surname);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('phone', formData.phone);
            formDataToSend.append('coverLetter', formData.coverLetter);
            formDataToSend.append('position', positionTitle);
            formDataToSend.append('cv', cvFile);

            const response = await fetch('/api/apply', {
                method: 'POST',
                body: formDataToSend,
            });

            const data = await response.json();

            if (!response.ok) throw new Error(data.message || 'Failed to submit application');

            setSubmitStatus({
                success: true,
                message: 'Application submitted successfully! We will contact you soon.'
            });
            resetForm();
            setTimeout(onClose, 3000);
        } catch (error) {
            setSubmitStatus({
                success: false,
                message: error.message || 'Failed to submit application. Please try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 z-40 backdrop-blur-sm bg-black/30" />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 max-h-[90vh] overflow-y-auto">
                    <button
                        onClick={handleClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                        aria-label="Close"
                    >
                        <FaTimes className="w-6 h-6" />
                    </button>

                    <h3 className="text-2xl font-bold text-center mb-2 text-slate-900">
                        Apply for {positionTitle}
                    </h3>
                    <p className="text-center text-slate-600 mb-6">
                        Please fill out the form below to submit your application.
                    </p>

                    {submitStatus && (
                        <div className={`mb-6 p-4 rounded-lg text-center ${
                            submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                            {submitStatus.message}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                                    First Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="surname" className="block text-sm font-medium text-slate-700 mb-1">
                                    Last Name *
                                </label>
                                <input
                                    type="text"
                                    id="surname"
                                    name="surname"
                                    value={formData.surname}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                                    Phone *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="coverLetter" className="block text-sm font-medium text-slate-700 mb-1">
                                Cover Letter (Optional)
                            </label>
                            <textarea
                                id="coverLetter"
                                name="coverLetter"
                                value={formData.coverLetter}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="cv" className="block text-sm font-medium text-slate-700 mb-1">
                                CV/Resume *
                            </label>
                            <div className="flex items-center">
                                <label className="flex flex-col items-center px-4 py-6 bg-white rounded-lg border border-dashed border-slate-300 cursor-pointer hover:bg-slate-50 w-full">
                                    <div className="flex flex-col items-center justify-center">
                                        <FaPaperclip className="w-6 h-6 text-cyan-500 mb-2" />
                                        <p className="text-sm text-slate-600">
                                            {fileName || 'Click to upload your CV'}
                                        </p>
                                        <p className="text-xs text-slate-500 mt-1">
                                            PDF or Word document (max 5MB)
                                        </p>
                                    </div>
                                    <input
                                        id="cv"
                                        name="cv"
                                        type="file"
                                        accept=".pdf,.doc,.docx"
                                        onChange={handleFileChange}
                                        className="hidden"
                                        required
                                    />
                                </label>
                            </div>
                            {fileName && (
                                <p className="text-sm text-slate-600 mt-2">
                                    Selected file: {fileName}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3 rounded-lg text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 focus:ring-2 focus:ring-cyan-500 disabled:opacity-70 transition-all flex justify-center items-center"
                        >
                            {isSubmitting ? (
                                <>
                                    <FaSpinner className="animate-spin mr-2" />
                                    Submitting...
                                </>
                            ) : (
                                'Submit Application'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}