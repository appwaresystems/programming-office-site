'use client';

import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt, FaClock, FaTimes } from 'react-icons/fa';

export default function ConsultationModal({ isOpen, onClose }) {
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
            const response = await fetch('/api/book-consultation', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    email,
                    date: selectedDate.toISOString(),
                    time: selectedTime,
                }),
            });

            const data = await response.json();

            if (!response.ok) throw new Error(data.message || 'Failed to book consultation');

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
            {/* Размытие и затемнение фона */}
            <div className="fixed inset-0 z-40 backdrop-blur-sm bg-black/30" />

            {/* Модалка поверх */}
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
                        <div
                            className={`mb-6 p-4 rounded-lg text-center ${
                                submitStatus.success
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-red-100 text-red-800'
                            }`}
                        >
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