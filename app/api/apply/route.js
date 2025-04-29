import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const formData = await request.formData();

        // Extract form data
        const name = formData.get('name');
        const surname = formData.get('surname');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const coverLetter = formData.get('coverLetter');
        const position = formData.get('position');
        const cvFile = formData.get('cv');

        // Validate required fields
        if (!name || !surname || !email || !phone || !cvFile || !position) {
            return NextResponse.json(
                { success: false, message: 'All required fields must be filled' },
                { status: 400 }
            );
        }

        // Create SMTP transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: process.env.SMTP_PORT === '465',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Convert file to buffer
        const cvBuffer = await cvFile.arrayBuffer();

        // Send email to admin
        await transporter.sendMail({
            from: `"Career Portal" <${process.env.SMTP_FROM_EMAIL}>`,
            to: process.env.CONTACT_FORM_RECIPIENT,
            subject: `New Job Application: ${name} ${surname} for ${position}`,
            html: `
                <h2>New Job Application Received</h2>
                <p><strong>Position:</strong> ${position}</p>
                <p><strong>Name:</strong> ${name} ${surname}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                ${coverLetter ? `<p><strong>Cover Letter:</strong> ${coverLetter}</p>` : ''}
            `,
            attachments: [{
                filename: cvFile.name,
                content: Buffer.from(cvBuffer),
                contentType: cvFile.type
            }]
        });

        // Send confirmation to applicant
        await transporter.sendMail({
            from: `"Career Portal" <${process.env.SMTP_FROM_EMAIL}>`,
            to: email,
            subject: `Application Received for ${position}`,
            html: `
                <h2>Thank You for Your Application</h2>
                <p>Dear ${name},</p>
                <p>We have received your application for the ${position} position.</p>
                <p>Our team will review your application and get back to you soon.</p>
                <p>Best regards,<br/>The Hiring Team</p>
            `
        });

        return NextResponse.json(
            { success: true, message: 'Application submitted successfully!' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Application error:', error);
        return NextResponse.json(
            { success: false, message: 'An error occurred while processing your application' },
            { status: 500 }
        );
    }
}