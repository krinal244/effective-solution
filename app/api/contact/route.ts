import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    const { name, email, message } = await req.json();

    // Configure your SMTP transporter
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: `"Effective Solution" <${email}>`,
            to: process.env.CONTACT_EMAIL, // Your receiving email
            subject: 'New Contact Form Submission',
            text: message,
            html: `<p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Message:</strong><br/>${message}</p>`,
        });

        // 2. Send confirmation mail to the user
        await transporter.sendMail({
            from: `"Effective Solution" <${process.env.SMTP_USER}>`,
            to: email,
            subject: 'We received your query!',
            text: `Hi ${name},\n\nThank you for contacting us. Your query has been submitted successfully. We will get back to you soon!\n\nBest regards,\nJD Home Lights and automation`,
            html: `<p>Hi ${name},</p>
                   <p>Thank you for contacting us. Your query has been submitted successfully. We will get back to you soon!</p>
                   <p>Best regards,<br/>Effective Solution</p>`,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
    }
}