// app/api/book-consultation/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { name, email, date, time } = await request.json();

        // Format the date for display
        const consultationDate = new Date(date);
        const formattedDate = consultationDate.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        // Create SMTP transporter (same as your email setup)
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: process.env.SMTP_PORT === '465',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Send confirmation to client
        await transporter.sendMail({
            from: `"Consultation Booking" <${process.env.SMTP_FROM_EMAIL}>`,
            to: email,
            subject: `Your Consultation Booking Confirmation`,
            html: `
        <h2>Consultation Booked Successfully</h2>
        <p>Hello ${name},</p>
        <p>Your consultation has been scheduled for:</p>
        <p><strong>Date:</strong> ${formattedDate}</p>
        <p><strong>Time:</strong> ${time} (UTC)</p>
        <p>We'll send you a calendar invite shortly.</p>
        <p>Looking forward to our discussion!</p>
      `,
        });

        // Send notification to your team
        await transporter.sendMail({
            from: `"Consultation Booking" <${process.env.SMTP_FROM_EMAIL}>`,
            to: process.env.CONTACT_FORM_RECIPIENT,
            subject: `New Consultation Booking: ${name}`,
            html: `
        <h2>New Consultation Booking</h2>
        <p><strong>Client:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Scheduled for:</strong> ${formattedDate} at ${time} (UTC)</p>
      `,
        });

        return NextResponse.json(
            { message: 'Consultation booked successfully' },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: error.message || 'Failed to book consultation' },
            { status: 500 }
        );
    }
}